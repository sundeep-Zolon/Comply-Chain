import React from "react";
import { Link } from "react-router-dom";
import usFlag from "../../images/us_flag.png";
import verite from "../../images/verite.png";
import ExampleInAction from "../../../../../../common/ExampleInAction/ExampleInAction";

const en = () => {
    return (
        <div>
            <h1>Audit Tools</h1>
            <p>
                Audit tool formats vary; some are on paper (later transcribed
                into an electronic system), while others are programmed into
                handheld electronic devices. Electronic tools are not
                necessarily superior to paper-based ones, but they do allow for
                greater efficiency and quicker reporting back to non-field-based
                team members.
            </p>
            <p>
                Audit tools are essentially sets of questions that flow directly
                from the code of conduct; in a sense, they
                &ldquo;translate&rdquo; the broader statements in the code into
                specific data points that must be gathered to assess compliance
                with the code.
            </p>
            <p>
                For example, with respect to child labor, a code of conduct
                might say:
            </p>
            <ul>
                <li>
                    Suppliers shall not employ children under age 15 or the
                    minimum age for work as defined by local law, whichever is
                    higher.
                </li>
            </ul>
            <p>
                Based on this code provision, the audit tool would then guide
                the auditor to examine issues such as:
            </p>
            <ul>
                <li>
                    What proof of age documentation is required at the time of
                    hire? How is this documentation verified? Where is proof of
                    age documentation kept?
                </li>
                <li>
                    If there are children under age 15 in the facility, are they
                    working in a legal apprenticeship or training program? What
                    documentation does the facility keep to verify that this is
                    a legitimate apprenticeship or training program?
                </li>
                <li>
                    Are they doing &ldquo;light work&rdquo; as defined in local
                    law or international standards? How does the facility define
                    and document &ldquo;light work&rdquo;?
                </li>
                <li>
                    What are the working conditions of all persons under age 18?
                    What specific tasks are they performing? What equipment are
                    they using? Can any of these tasks or equipment be
                    hazardous?
                </li>
                <li>
                    How does the facility distinguish between hazardous and
                    non-hazardous tasks, and how is the facility ensuring that
                    persons under 18 do not engage in hazardous tasks in
                    violation of international law?
                </li>
            </ul>
            <p>
                Forced labor is an extremely complex labor rights violation that
                can take many forms. The ILO&rsquo;s{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ilo.org/global/topics/forced-labour/publications/WCMS_099626/lang--en/index.htm"
                    title="Combating Forced Labour: A Handbook for Employers and Business, Booklet 4"
                >
                    <em>
                        Combating Forced Labour: A Handbook for Employers and
                        Business, Booklet 4
                    </em>
                </a>
                <em>, </em>contains a useful checklist and guidance for auditors
                and compliance personnel to identify forced labor at the
                enterprise level and in global supply chains. In 2016, the ILO
                also launched a mobile app,{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ilo.org/global/publications/WCMS_456961/lang--en/index.htm"
                    title="Checkpoints for Companies: Eliminating and Preventing Forced Labour"
                >
                    Checkpoints for Companies: Eliminating and Preventing Forced
                    Labour
                </a>
                , which allows companies, auditors, and compliance personnel to
                create interactive checklists to help eliminate and prevent
                forced labor in business operations. The below questions,
                excerpted from an ILO publication, can help an auditor identify
                specific forms of forced labor.&nbsp;
            </p>
            <h2>
                Table 1: Indicators of Forced Labor Through Recruitment
                Practices
            </h2>
            <ol>
                <li>
                    Were any workers born or descended into "slave" or bonded
                    status?
                </li>
                <li>
                    Were any workers abducted, confined during the recruitment
                    process, or sold into this job?
                </li>
                <li>
                    Were any workers recruited through some form of debt
                    arrangement, such as an advance or loan, which they are
                    working to pay off?
                </li>
                <li>
                    At the time of recruitment, were any workers told they would
                    be doing work of a different nature from the work they are
                    currently performing?
                </li>
                <li>
                    At the time of recruitment, were any workers promised
                    certain working conditions, employment contract terms,
                    living conditions, job locations, employers, or
                    wages/earnings that are different from what they actually
                    receiving?
                </li>
                <li>
                    At the time of recruitment, were workers offered marriage as
                    an incentive?
                </li>
            </ol>
            <h2>
                Table 2: Indicators of Forced Labor Through Work and Life Under
                Duress
            </h2>
            <ol>
                <li>
                    Are any workers working excessive overtime beyond legal
                    limits?
                </li>
                <li>
                    Are any workers forced to work &ldquo;on call&rdquo; (day or
                    night)?
                </li>
                <li>
                    Does the employer restrict workers&rsquo; freedom of
                    movement or communication with others inside or outside the
                    workplace?
                </li>
                <li>
                    If workers&rsquo; lodging is provided by the employer, are
                    the living conditions degrading?
                </li>
                <li>
                    Does the employer force workers to engage in illicit
                    activities, to work for his/her private home or family, or
                    to take addictive drugs?
                </li>
                <li>
                    Does the employer impose or inflate workers&rsquo;
                    indebtedness through means such as falsifying work records,
                    inflating prices for goods that workers are obliged to
                    purchase, reducing the value of goods or services produced
                    by workers, charging excessive interest on loans or advances
                    to workers, etc.?
                </li>
                <li>
                    Are any workers dependent on the employer for housing, food,
                    and other necessities?
                </li>
                <li>
                    Do any workers have dependency relationships with the
                    employer that go beyond the job, e.g., personal
                    relationship, dependency on the employer for family
                    members&rsquo; employment, etc.?
                </li>
            </ol>
            <h2>
                Table 3: Indicators of Forced Labor Through Impossibility of
                Leaving
            </h2>
            <ol>
                <li>
                    Do any workers feel they do not have freedom to resign the
                    job because of training other benefits they have received
                    from the employer?
                </li>
                <li>
                    Can workers terminate employment at any time, without
                    penalty (except as provided by law)?
                </li>
                <li>
                    Do any workers feel compelled to stay in the job because
                    they are waiting for wages they are due?
                </li>
                <li>
                    Are any workers working for an excessive or indefinite
                    period of time in order to repay a debt or advance from the
                    employer or recruiter?
                </li>
            </ol>
            <h2>Table 4: Indicators of Penalties or Threats</h2>
            <p>
                If any of the indicators listed above are present (note that any
                one indicator is enough; one is not needed from each table), the
                auditor should examine whether penalties or threats are being
                used to exact labor. If so, the situation may constitute forced
                labor:
            </p>
            <ol>
                <li>
                    Does the employer (or recruiter) threaten to turn workers
                    over to government authorities (e.g. immigration
                    authorities)?
                </li>
                <li>
                    Has the employer (or recruiter) taken possession of
                    workers&rsquo; identity papers or travel documents?
                </li>
                <li>
                    Does the employer restrict workers&rsquo; communication,
                    such as by confiscating mobile phones, isolating workers
                    from others, locking workers in the workplace or living
                    quarters, or constant surveillance?
                </li>
                <li>
                    Does the employer (or recruiter) perpetrate or threaten any
                    physical or sexual violence against workers including
                    violent punishment of one worker in front of other workers?
                </li>
                <li>
                    Does the employer punish or threaten to punish workers
                    through any other means, such as deprivation of food, water
                    or sleep, or make threats against their family members?
                </li>
                <li>
                    Does the employer (or recruiter) threaten to remove
                    privileges such as promotion potential?
                </li>
                <li>
                    Does the employer threaten further deterioration in working
                    conditions?
                </li>
                <li>
                    Does the employer (or recruiter) exploit religious or
                    cultural beliefs to threaten workers?
                </li>
                <li>
                    Does the employer (or recruiter) withhold workers&rsquo;
                    assets, such as personal property, cash, etc.?
                </li>
                <li>Does the employer withhold workers&rsquo; pay?</li>
                <li>Does the employer threaten to fire/dismiss workers?</li>
                <li>
                    Does the employer threaten extra work for workers who do not
                    cooperate?
                </li>
                <li>Does the employer threaten financial penalties?</li>
                <li>
                    Does the employer (or recruiter) threaten to withhold future
                    employment opportunities, to impose financial penalties, to
                    exclude workers from social or community activities, or use
                    any form of blackmail to coerce workers?
                </li>
            </ol>
            <p>
                Many companies&rsquo; audit tools are proprietary, so it can be
                difficult to find samples to guide the development of your own.
                The{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://responsiblesourcingtool.org/"
                    title="Responsible Sourcing Tool"
                >
                    Responsible Sourcing Tool
                </a>{" "}
                (RST) includes Sample Benchmarks of Good Practice in Recruitment
                and Employment to translate into measurable and actionable data
                points the requirements and good practices outlined in its
                Sample Code of Conduct Provisions, referenced in
                <Link to="/steps/3">Step 3, Develop a Code of Conduct</Link>.
                These benchmarks, which cover a range of areas related to forced
                labor and human trafficking, including recruitment fees,
                contracts of employment, document retention, and freedom of
                movement, can serve as a basis for the development of audit
                instruments and for establishing and monitoring key performance
                indicators to evaluate the performance of suppliers and labor
                agents.
            </p>
            <ExampleInAction id="rst1a">
                <h2>
                    <ExampleInAction.Icon />
                    Example in Action: Responsible Sourcing Tool 1A
                </h2>
                <div className="flag-verite">
                    <img className="flag" src={usFlag} alt="US Flag" />
                    <img className="verite" src={verite} alt="Verite sign" />
                </div>
                <p>
                    <strong>PROTECTIONS AGAINST TRAFFICKING IN PERSONS </strong>
                </p>
                <p>
                    <strong>
                        Sample Benchmarks of Good Practice in Recruitment and
                        Employment
                    </strong>
                </p>
                <p>
                    <strong>HUMAN TRAFFICKING</strong>
                </p>
                <p>
                    Company policies and practices express a clear prohibition
                    of, forced, compulsory, bonded, or indentured labor that
                    applies to all entities in its supply chain, including those
                    involved in the recruitment, selection, and hiring of
                    workers. Company policies and practices also express a clear
                    prohibition of sex trafficking and procurement of commercial
                    sex.
                </p>
                <ul>
                    <li>
                        Clear and transparent human resource practices on
                        recruitment, contracts, wages and working hours are
                        adopted by the company and its subcontractors to
                        minimize the risk of human trafficking.
                    </li>
                    <li>
                        The company, and suppliers, subcontractors or agents
                        acting on its behalf, comply with all relevant local
                        laws and regulations, including those concerning the
                        prohibition of forced labor and human trafficking in
                        each jurisdiction in which they operate.
                    </li>
                    <li>
                        The workplace is free of any form of, forced,
                        compulsory, bonded, or indentured labor, or involuntary
                        prison labor.
                    </li>
                    <li>
                        Workers enter into employment freely and employment
                        terms and conditions are agreed to voluntarily, without
                        deception or threat of penalty.
                    </li>
                    <li>All work is voluntary.</li>
                    <li>
                        Workers have the freedom to terminate their employment
                        at any time without penalty, given notice of reasonable
                        length (not to exceed 30 days).
                    </li>
                </ul>
                <p>
                    <strong>
                        RECRUITMENT FEES AND TRANSPORTATION EXPENSES
                    </strong>
                </p>
                <p>
                    The company has a written policy declaring that workers
                    shall not pay any amount to secure a job with the company or
                    with a supplier or subcontractor.
                </p>
                <ul>
                    <li>
                        The job advertisements from the company and its
                        subcontractors and suppliers include the statement that
                        no fees shall be charged at any phase in the recruitment
                        and hiring process.
                    </li>
                    <li>
                        The employer covers all recruitment and processing fees,
                        costs, and expenses, including those associated with
                        securing identity cards, medical certificates and
                        examinations, skills testing, and travel from the
                        worker&rsquo;s home to the location of employment.
                    </li>
                    <li>
                        The employer fully covers the cost of return
                        transportation to the worker&rsquo;s country of origin
                        upon completion of their employment contract.
                    </li>
                    <li>
                        The company has mechanisms to continuously monitor and
                        ensure that workers are not charged any amount to secure
                        a job.
                    </li>
                    <li>
                        The company only engages recruiters, agents, and
                        sub-agents who do not charge fees to jobseekers.
                    </li>
                    <li>
                        The company, or subcontractors acting on its behalf, has
                        means of informing jobseekers at the point of
                        recruitment that workers do not pay fees or costs for
                        any services directly related to obtaining employment.
                    </li>
                    <li>
                        The company or receiving country recruiter has a
                        verification process to ensure that workers are not
                        charged any fees.
                    </li>
                    <li>
                        Workers found to have been charged fees are repaid, and
                        contracts with recruiters found to have charged fees are
                        terminated.
                    </li>
                </ul>
                <p>
                    <strong>CONTRACTS OF EMPLOYMENT</strong>
                </p>
                <ul>
                    <li>
                        All candidates are clearly informed of the terms and
                        conditions of employment, and successful candidates are
                        provided a copy of the contract at least five days prior
                        to deployment.
                    </li>
                    <li>
                        The company explains the terms and conditions of the
                        contract in the workers&rsquo; native language, and has
                        means to verify that the terms are clearly understood
                        and fully agreed to by the workers.
                    </li>
                    <li>
                        Employment contracts clearly specify the rights and
                        responsibilities of workers with regard to wages,
                        benefits, hours of work, including regular hours and
                        overtime requirements, days off and annual leave,
                        location of the work, living conditions, housing
                        arrangements, work related hazards, and disciplinary and
                        other procedures that can lead to termination, as well
                        as appeal procedures and grievance mechanisms consistent
                        with applicable law.
                    </li>
                    <li>
                        The details of working conditions described at the point
                        of recruitment are consistent with the details contained
                        in the employment contract at the time of hiring, and
                        with actual job conditions and responsibilities.
                    </li>
                    <li>
                        Company policy prohibits the substitution of original
                        contract provisions with those that are less favorable
                        to the worker. Any amendments made to improve conditions
                        are made with the knowledge and the informed, written
                        consent of the worker.
                    </li>
                    <li>
                        Changes to working conditions are made with the
                        knowledge and consent of the worker. Consent is obtained
                        voluntarily and without the threat of penalty. No
                        changes are made that in any way diminish the
                        worker&rsquo;s originally anticipated wages, benefits,
                        or other conditions of work; or place the worker in a
                        position of physical or mental risk or peril, or other
                        form of disadvantage or vulnerability.
                    </li>
                    <li>
                        Employment contracts clearly stipulate the rights and
                        responsibilities of each party regarding the termination
                        of employment.
                    </li>
                    <li>
                        Employment contracts clearly specify the circumstances
                        in which a worker can terminate his or her contract
                        without penalty, given reasonable notice, and in
                        accordance with national law. The required notice period
                        for workers to terminate their contracts early shall not
                        exceed one month or as specified by local law, whichever
                        is shortest.
                    </li>
                    <li>
                        The notice period shall be waived in situations where
                        the worker has suffered harassment or abuse, or is a
                        victim of trafficking in persons. In such cases the
                        employer shall also be responsible for paying the cost
                        of return transportation for the affected worker.
                    </li>
                </ul>
                <p>
                    <strong>DOCUMENT RETENTION</strong>
                </p>
                <ul>
                    <li>
                        Applicants&rsquo; or workers&rsquo; identity or
                        immigration documents, including passports, residency or
                        work permits, or other personal documents, such as bank
                        books or automatic teller machine (ATM) cards, are not
                        destroyed, concealed, confiscated, or otherwise denied
                        access by the worker, for any reason.
                    </li>
                    <li>
                        In the event that personal documents are held by the
                        employer or subcontractor due to legal requirements,
                        these are immediately returned to the worker upon demand
                        and without any preconditions. In such circumstances,
                        the employer or subcontractor:
                        <ul>
                            <li>
                                Provides workers with an exact copy of personal
                                documentation when not in their possession;
                            </li>
                            <li>
                                Develops written policies and procedures to
                                prevent abuse;
                            </li>
                            <li>
                                Nominates a responsible person to ensure workers
                                have unhindered access to their documents upon
                                demand; and
                            </li>
                            <li>Notifies workers of these procedures.</li>
                        </ul>
                    </li>
                    <li>
                        Lengthy or otherwise burdensome prerequisites for
                        accessing one&rsquo;s passport or other personal
                        documents, such as written requests, monetary deposits
                        or waiting periods, are strictly prohibited.
                    </li>
                    <li>
                        Workers are provided with individual locked, secure
                        storage space for personal documents and valuables at
                        both their employer-provided accommodation and
                        workplace.
                    </li>
                </ul>
                <p>
                    <strong>DEPOSITS</strong>
                </p>
                <ul>
                    <li>
                        Workers are not required to post a bond at the time of
                        recruitment or at any other time during the employment
                        relationship.
                    </li>
                    <li>
                        The company policies strictly prohibit the collection of
                        monetary deposits or security payments.
                    </li>
                    <li>
                        The company, or subcontractor acting on its behalf,
                        withholds portions of workers&rsquo; pay only where it
                        is legally required.
                    </li>
                    <li>
                        In those cases where migrant workers have opted to
                        participate in voluntary savings schemes facilitated by
                        their employer, such workers have unhindered access to
                        and full control over all savings and monies owed.
                    </li>
                </ul>
                <p>
                    <strong>HUMANE TREATMENT</strong>
                </p>
                <ul>
                    <li>
                        Company policies and procedures prohibit sanctions that
                        impose work or wage deductions, or reductions in
                        benefits as a means to discipline workers.
                    </li>
                    <li>
                        No form of compulsory labor is imposed on any worker.
                    </li>
                    <li>
                        The policy of the company, or subcontractor acting on
                        its behalf, strictly prohibits the use or threat of
                        physical or sexual violence, harassment and
                        intimidation, and senior management has expressed clear
                        commitment to this policy.
                    </li>
                    <li>
                        Effective measures are in place to implement, monitor,
                        and ensure company-wide compliance with this policy.
                    </li>
                    <li>
                        There is no evidence of complaints, grievances, or
                        actions taken against the company, its managers or
                        supervisors, or its subcontractors, suppliers and
                        agents, with respect to violence, intimidation, or
                        harassment in the workplace. In cases where a complaint
                        or grievance has been raised, evidence should show that
                        swift and transparent action was taken to address it.
                    </li>
                </ul>
                <p>
                    <strong>WORKPLACE EQUALITY</strong>
                </p>
                <ul>
                    <li>
                        All workers, regardless of their national origin,
                        ethnicity, race, or legal status, are treated equally in
                        the workplace.
                    </li>
                    <li>
                        Migrant workers are treated no less favorably than
                        country nationals with respect to:
                        <ul>
                            <li>
                                Remuneration, hours of work, overtime
                                arrangements, and holidays with pay;
                            </li>
                            <li>Access to training;</li>
                            <li>
                                Eligibility for promotion and wage increases;
                            </li>
                            <li>
                                Membership in labor unions or other worker
                                organizations;
                            </li>
                            <li>Accommodation; and</li>
                            <li>
                                Benefits and social insurance, including social
                                security, maternity and sick leave, disability
                                and employment injury insurance.
                            </li>
                        </ul>
                    </li>
                    <li>
                        The company, or subcontractors acting on its behalf,
                        explicitly prohibits the abuse of vulnerability of
                        migrant workers, including the threat of denunciation to
                        authorities as a means of coercion.
                    </li>
                </ul>
                <p>
                    <strong>WAGES AND BENEFITS</strong>
                </p>
                <ul>
                    <li>
                        The freedom of workers to dispose of their wages as they
                        choose is not limited in any way.
                    </li>
                    <li>
                        Wages specified in employment contracts meet legal
                        minimum wage. In the absence of a legal minimum wage,
                        wages are at least the industry prevailing wage for
                        similar work in the immediate area in the country of
                        employment, and wage calculations are equitable and
                        objective.
                    </li>
                    <li>
                        Wage payments are not deferred, delayed, or withheld as
                        a means of binding workers to employment.
                    </li>
                    <li>
                        Non-cash or &ldquo;in-kind&rdquo; payments in lieu of
                        wages are not used.
                    </li>
                    <li>
                        Wage rates and payments are calculated with full
                        transparency.
                    </li>
                    <li>
                        The calculation and payment of wages, including legal
                        wage deductions, are clearly explained to and understood
                        by all workers.
                    </li>
                    <li>
                        No unlawful or unauthorized deductions are made from
                        workers&rsquo; wages. Any deductions from wages are
                        clearly described in the employment contract and
                        undertaken with written worker consent.
                    </li>
                    <li>
                        Wage deductions levied for tardiness or absence are not
                        excessive and do not exceed the time missed on the job,
                        for example 10 minutes worth of pay for 10 minutes
                        tardiness.
                    </li>
                    <li>
                        Wage advances or loans provided to workers, along with
                        related interest rates, comply with the law, at a
                        minimum. Additionally:
                        <ul>
                            <li>
                                Interest rates and repayment terms are fair.
                                Payments do not exceed 10 percent of a
                                worker&rsquo;s monthly wage, such that loans can
                                be repaid in a reasonable amount of time not
                                exceeding six months;
                            </li>
                            <li>
                                The calculation of interest rates for loans and
                                advances, and wage deductions made for their
                                repayment are made with complete transparency to
                                the worker;
                            </li>
                            <li>
                                Interest rates do not exceed the local
                                prevailing local market bank rates;
                            </li>
                            <li>
                                The terms of wage advances and their repayment
                                are agreed to by both parties in advance and in
                                written form.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Jobseekers, applicants or workers are not required to
                        participate in any form of forced or mandatory savings
                        in order to recoup costs associated with recruitment or
                        other services.
                    </li>
                    <li>
                        If migrant workers pay for employer provided or arranged
                        housing and food, such charges:
                        <ul>
                            <li>
                                Do not exceed market rates or the rate paid by
                                local workers;
                            </li>
                            <li>
                                Do not aid companies or subcontractors in
                                earning a profit at workers&rsquo; expense; and
                            </li>
                            <li>
                                Are not part of efforts to reclaim placement
                                fees or other fees paid by employers for
                                recruiting workers.
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>
                    <strong>WORKING HOURS</strong>
                </p>
                <ul>
                    <li>
                        Workers are not forced to work more than the number of
                        hours allowed by national law, or, where the law is
                        silent, working hours do not exceed eight per day and 48
                        per week, and total working hours including overtime
                        does not exceed 60 hours in a week.
                    </li>
                    <li>
                        Effective workplace and company-wide measures are
                        adopted to ensure full implementation and compliance
                        with this policy, including continuous monitoring of
                        hours worked to identify workers at risk of exceeding
                        the limit, coordination of production and manpower
                        planning, etc.
                    </li>
                    <li>
                        All overtime work is purely voluntary, unless
                        specifically stated otherwise in a legally recognized
                        collective bargaining agreement.
                    </li>
                    <li>
                        Workers track their own working hours using an
                        electronic or other objective, verifiable timekeeping
                        system.
                    </li>
                    <li>
                        Workers are free to refuse overtime work without threat
                        or fear of punishment or reprisal.
                    </li>
                    <li>
                        For those that agree to work overtime, a system is in
                        place to obtain their written consent at the time of the
                        request.
                    </li>
                    <li>
                        In cases where remuneration is based on productivity
                        targets, for example piece rate, workers are not forced
                        to work more overtime hours than allowed by national law
                        in order to achieve their production quota.
                    </li>
                </ul>
                <p>
                    <strong>FREEDOM OF MOVEMENT AND PERSONAL FREEDOM</strong>
                </p>
                <ul>
                    <li>
                        Workers enjoy reasonable freedom of movement within
                        their work and living environments. Any legitimate
                        constraints on off premises movement (for example, for
                        valid personal safety or security concerns) are
                        specified prior to the signing of the employment
                        contract.
                    </li>
                    <li>
                        Workers have unrestricted access to basic necessities
                        (drinking water, toilets) during both work and non-work
                        hours.
                    </li>
                    <li>
                        The presence of security personnel or other security
                        measures in the workplace or employer or
                        recruiter-provided or arranged residences are not used
                        as a means to restrict worker freedom of movement.
                    </li>
                    <li>
                        No other coercive means are used to restrict migrant
                        workers&rsquo; freedom of movement or personal freedom,
                        including confiscation of personal documents, levying of
                        financial penalties or security deposits, or use of
                        deception in wage payment and deductions.
                    </li>
                    <li>
                        Workers are not required to live in employer- or
                        recruiter-operated residences as a condition of
                        employment, unless required by applicable law.
                    </li>
                    <li>
                        Migrant workers are free to return to their home country
                        during paid leave, without any penalty, or threat of
                        termination.
                    </li>
                </ul>
                <p>
                    <strong>GRIEVANCE PROCEDURES</strong>
                </p>
                <ul>
                    <li>
                        Supplier and recruiter policy and practice reveals a
                        functioning and effective grievance procedure available
                        to workers in their native language.
                    </li>
                    <li>
                        Effective measures are in place to ensure that migrant
                        workers know how to use this procedure and feel safe and
                        free from potential retaliation if doing so.
                    </li>
                    <li>
                        Where grievances are raised, effective and appropriate
                        procedures are in place to ensure a rapid and mutually
                        agreed settlement.
                    </li>
                    <li>
                        Resolution of workplace grievances are regularly
                        reported back to all workers.
                    </li>
                    <li>
                        Results of worker surveys and interviews confirm that
                        workers both understand the means available to them to
                        report grievances and that they trust the process to
                        fairly address their issues.
                    </li>
                    <li>
                        An effective appeals process is in place to impartially
                        evaluate any disputed grievance resolution.
                    </li>
                </ul>
                <p>
                    <strong>
                        PRIVATE EMPLOYMENT AGENCIES AND LABOR RECRUITERS
                    </strong>
                </p>
                <ul>
                    <li>
                        The company and its suppliers hire workers directly
                        whenever possible.
                    </li>
                    <li>
                        When the recruitment, selection, and hiring of workers
                        is undertaken by a private employment agency or other
                        third-party, suppliers shall have the responsibility to
                        ensure that the agencies operate legally, are certified
                        or licensed by the competent authority, use only
                        employees trained on applicable Code and legal
                        requirements, and do not charge recruitment fees or
                        engage in fraudulent behavior that places workers at
                        risk of trafficking for labor exploitation.
                    </li>
                    <li>
                        The company signs a formal contract with the
                        subcontracted agency and performs regular due diligence
                        on the agency and its partners involved in the hiring
                        and placement of workers.
                    </li>
                    <li>
                        Effective measures are established by the company to
                        ensure the legal compliance of sub-contractors in each
                        jurisdiction in which they operate.
                    </li>
                    <li>
                        The subcontracted agency has an up-to-date license or
                        permit to operate in all countries of operation, and any
                        partners or agents working on its behalf also have
                        up-to-date permits or licenses.
                    </li>
                    <li>
                        The subcontracted agency has not been cited, suspended,
                        or otherwise sanctioned for non-compliance with any laws
                        in any country of operation; or, where a citation for
                        non-compliance exists, the agency can demonstrate that
                        it has rectified the non-compliance.
                    </li>
                    <li>
                        The company has mechanisms to monitor the performance of
                        agents and recruiters to ensure that no deception, fraud
                        and/or coercion in the recruitment, placement, transport
                        or management of migrant workers take place.
                    </li>
                    <li>
                        The company, or subcontractors acting on its behalf,
                        provides jobseekers with accurate details of working
                        conditions at the time of recruitment, including the
                        nature of work, wages, benefits and duration of
                        contract.
                    </li>
                    <li>
                        Details of working and employment conditions are
                        communicated to jobseekers in a language they
                        understand.
                    </li>
                    <li>
                        False promises are not made to applicants or workers
                        regarding employment conditions, job locations,
                        employment or contract duration, or anticipated
                        earnings.
                    </li>
                    <li>
                        The subcontracted agency has an implementing structure,
                        an accountable officer, and clear procedures to ensure
                        that all policies are compliant with all relevant
                        legislation and regulations. This includes a current
                        registry of laws for all countries of operation; and a
                        mechanism that ensures the company is regularly informed
                        of new legislation/regulations or changes in
                        legislation/regulations.
                    </li>
                    <li>
                        The subcontracted agency has a code of conduct that
                        prohibits human trafficking and sets out protective
                        measures for workers. The code covers principles
                        elaborated in relevant ILO Conventions and the Code of
                        Conduct of the International Confederation of Private
                        Employment Agencies (CIETT), and applies to all parties
                        in the chain of recruitment. The code is supported by an
                        institutional structure that ensures its effective
                        implementation.
                    </li>
                    <li>
                        The subcontracted agency has established a mechanism for
                        confidential reporting of noncompliance, a grievance
                        mechanism, procedures of investigation and reporting on
                        grievances, and protection for whistleblowers.
                    </li>
                    <li>
                        The subcontracted agency has established effective
                        remediation procedures in case of verified reports of
                        noncompliance, including mechanisms to ensure the
                        reimbursement of workers for any recruitment fees paid.
                    </li>
                    <li>
                        The company, or subcontractors acting on its behalf,
                        does not use any means to restrict migrant
                        workers&rsquo; freedom to terminate employment, for
                        example by levying excessive recruitment fees, requiring
                        deposits, or withholding personal documentation.
                    </li>
                </ul>
                <p>
                    <strong>EMPLOYEE AWARENESS AND TRAINING</strong>
                </p>
                <ul>
                    <li>
                        All written information and training is provided in the
                        native language of the workers.
                    </li>
                    <li>
                        Workers are made aware of their rights and
                        responsibilities, both verbally and in writing, at the
                        time of hire including the provisions of this Code and
                        all applicable laws and regulations of their home
                        country, the country where the work is performed, and of
                        any country and jurisdiction contracting the work.
                    </li>
                    <li>
                        Pre-departure orientation is conducted to review
                        contractual obligations, terms and conditions of work
                        and other matters including but not limited to living
                        conditions, company policies, and the grievance
                        mechanisms in place for workers.
                    </li>
                    <li>
                        Workers are trained upon arrival in the receiving
                        country on the company&rsquo;s workplace rules and
                        procedures, the grievance process, the housing
                        arrangements (if provided or arranged by the company),
                        and the conditions of work, including any health and
                        safety hazards and the precautions needed to ensure
                        personal safety.
                    </li>
                    <li>
                        The company evaluates the effectiveness of its training
                        and awareness efforts by measuring employee knowledge
                        upon completion of training and periodically thereafter
                        using surveys, interviews and other means.
                    </li>
                </ul>
                <p>
                    <strong>Source: Responsible Sourcing Tool 1A, </strong>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.responsiblesourcingtool.org/recruitmentandemployment"
                        title="Sample Benchmarks of Good Practice in Recruitment and Employment"
                    >
                        <strong>
                            Sample Benchmarks of Good Practice in Recruitment
                            and Employment
                        </strong>
                    </a>
                    .
                </p>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://responsiblesourcingtool.org/"
                        title="ResponsibleSourcingTool.org"
                    >
                        ResponsibleSourcingTool.org
                    </a>{" "}
                    was created through a collaboration between the U.S.
                    Department of State,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.verite.org/"
                        title="Verit&eacute;"
                    >
                        Verit&eacute;
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://madeinafreeworld.com/"
                        title="Made in a Free World"
                    >
                        Made in a Free World
                    </a>
                    , and the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.aspeninstitute.org/"
                        title="Aspen Institute"
                    >
                        Aspen Institute
                    </a>
                    . The content of RST was provided by Verit&eacute;, a labor
                    rights organization with expertise in supply chain
                    compliance, with funds from the U.S. Department of
                    State&rsquo;s Office to Monitor and Combat Trafficking in
                    Persons under Cooperative Agreement S-SJTIP-13-CA-1029
                    <strong>.</strong> The development of RST was informed by
                    experts from several U.S. government agencies, including the
                    U.S. Departments of State and Labor, and other primary
                    stakeholders including trafficking survivors, corporate and
                    NGO leaders, and acquisitions personnel and federal
                    contracting officers.
                </p>
            </ExampleInAction>
            <p>
                Good audit tools are more than &ldquo;checklists.&rdquo; Good
                tools allow for recording information that auditors gain
                nonverbally, through observation of site conditions and
                workplace climate, interviewees&rsquo; body language and other
                cues. Auditors should research in advance any vulnerabilities
                that the worker population at the facility may experience, and
                should be attentive to subtle hints that workers may be subject
                to pressure or coercion. Audit tools should allow for recording
                information that may not be directly linked to the questions
                contained in the tool, but which the auditor still feels is
                important and relevant.
            </p>
            <p>
                Companies increasingly require their subcontractors and
                suppliers to perform self-assessments to highlight potential
                risks of forced labor and human trafficking in the supply chain.
                The Responsible Sourcing Tool&rsquo;s{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://responsiblesourcingtool.org/supplierselfassessment"
                    title="Sample Supplier/Subcontractor Self-Assessment Tool"
                >
                    Sample Supplier/Subcontractor Self-Assessment Tool
                </a>{" "}
                is designed to help suppliers and subcontractors determine
                whether their activities conform to company or industry codes of
                conduct, as well as highlight potential human trafficking risks
                in how they recruit, select, and hire workers, in how they work
                with labor brokers, and in how migrant workers are managed. This
                tool can be used variously as a supplier screening tool, to
                develop corrective action plans, or to establish key performance
                indicators to track ongoing social responsibility performance.
            </p>
            <p>
                Another important tool that can be used by any organization or
                an independent third party to authenticate the scope and
                effectiveness of the organization&rsquo;s anti-human trafficking
                efforts is Verit&eacute;&rsquo;s{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://responsiblesourcingtool.org/download/reports/Verite_BusinessAuthenticationCriteria_r1.pdf"
                    title="Anti-Human Trafficking Business Authentication Criteria"
                >
                    Anti-Human Trafficking Business Authentication Criteria
                </a>
                . This tool provides assessors with criteria to authenticate
                company-level conformance with its anti-human trafficking
                efforts, including policy commitments, board and executive
                accountability, organizational structure, assessing and
                controlling risks, and performance expectations. It provides
                both leading practices for each criterion, as well as evidence
                needed for verification. The tool also provides guidance to
                assessors to authenticate site-level conformance with these
                efforts, including by specifying minimum requirements.
            </p>
        </div>
    );
};

export default en;
