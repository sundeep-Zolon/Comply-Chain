import SpellChecker from "simple-spellchecker";
import Localization from "../components/Language/Localization";
import Routes from "../modules/config/routes";
import { getRawTextData } from "../modules/utils";

describe("Spell Checker", () => {
    const localizor = new Localization();

    const enDict = SpellChecker.getDictionarySync(
        `en-US`,
        __dirname + "/dicts"
    );

    const frDict = SpellChecker.getDictionarySync(
        `fr-FR`,
        __dirname + "/dicts"
    );
    const esDict = SpellChecker.getDictionarySync(
        `es-ES`,
        __dirname + "/dicts"
    );
    localizor.getAvailableLanguages().forEach(lang => {
        localizor.setLanguage(lang);

        describe(lang, () => {
            const setupData = localizor => {
                // set up steps data in a way so that when the data is searched and returned it is returned in chronological order
                const steps = [].concat.apply(
                    [],
                    localizor.strings.steps.map((step, stepIdx) => {
                        const data = [
                            {
                                title: step.title,
                                keywords: step.keywords,
                                to: `/steps/${stepIdx + 1}`
                            },
                            {
                                title: `${step.title} - ${
                                    localizor.strings.general.learningObjectives
                                }`,
                                content: step.learningObjectives.join(" "),
                                to: `/steps/${stepIdx + 1}#learning-objectives`
                            },
                            {
                                title: `${step.title} - ${
                                    localizor.strings.general.keyTerms
                                }`,
                                // map through keyterms to create an array of arrays and then flatten those arrays into a single array
                                content: [].concat
                                    .apply(
                                        [],
                                        step.keyTerms.map(keyTerm => {
                                            return Object.values(keyTerm);
                                        })
                                    )
                                    .join(" "),
                                to: `/steps/${stepIdx + 1}#key-terms`
                            }
                        ];

                        const topics = step.topics.map((topic, topicIdx) => {
                            return {
                                title: `${step.title} - ${topic.title}`,
                                keywords: topic.keywords,
                                content: getRawTextData(
                                    topic.content().props.children
                                ).join(" "),
                                to: `/steps/${stepIdx + 1}/topic/${topicIdx +
                                    1}`
                            };
                        });
                        const result = data.concat(topics);
                        result.push({
                            title: `${step.title} - ${
                                localizor.strings.general.furtherResources
                            }`,
                            content:
                                step.furtherResources &&
                                getRawTextData(step.furtherResources()).join(
                                    " "
                                ),
                            to: `/steps/${stepIdx + 1}#resources`
                        });
                        return result;
                    })
                );

                let info = [];
                for (const key in localizor.strings.info) {
                    const item = localizor.strings.info[key];
                    // convert the first letter of the object keys to uppercase in order to find the path based on the Routes object.
                    const routeKey = key.charAt(0).toUpperCase() + key.slice(1);
                    info.push({
                        title: item.title,
                        keywords: item.keywords,
                        content: getRawTextData(
                            item.content().props.children
                        ).join(" "),
                        to: Routes[routeKey].path
                    });
                }

                // merge all the data together in order to search it all
                return steps.concat(info);
            };
            let data = setupData(localizor);
            it(`has no spelling errors`, () => {
                const spellCheck = (lang, word) => {
                    if (lang === "en") {
                        return (
                            enDict.spellCheck(word) ||
                            frDict.spellCheck(word) ||
                            esDict.spellCheck(word)
                        );
                    }
                    if (lang === "fr") {
                        return (
                            frDict.spellCheck(word) ||
                            enDict.spellCheck(word) ||
                            esDict.spellCheck(word)
                        );
                    }

                    return (
                        esDict.spellCheck(word) ||
                        enDict.spellCheck(word) ||
                        frDict.spellCheck(word)
                    );
                };

                data.map(item => {
                    const content = item.content;
                    const linkExpr = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
                    const linkRegex = new RegExp(linkExpr);
                    if (content) {
                        const words = content.split(/\s/g);
                        words.map(word => {
                            if (word.match(linkRegex)) {
                                return word;
                            }
                            const cleansedWord = word
                                .trim()
                                .replace(/[\\[\]|&;$%@"<>()+,:\-.]/g, "");

                            if (cleansedWord.match(/^[a-z]+$/i)) {
                                const correct = spellCheck(lang, cleansedWord);
                                if (!correct) {
                                    console.log(
                                        `${cleansedWord} is invalid for ${lang} under ${
                                            item.title
                                        }`
                                    );
                                }
                            }
                            return word;
                        });
                    }
                    return item;
                });
            });
        });
    });
});
