import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar
} from "semantic-ui-react";

const NavBarMobile = ({
    children,
    leftItems,
    onPusherClick,
    onToggle,
    rightItems,
    visible
}) => (
    <Sidebar.Pushable as={Segment}>
        <Sidebar
            as={Menu}
            color="blue"
            inverted
            animation="overlay"
            icon="labeled"
            vertical
            visible={visible}
            width="thin"
        >
            {leftItems.map((item, i) => (
                <Menu.Item {...item.props} key={"mobile_left_" + i}>
                    {item.component}
                </Menu.Item>
            ))}
        </Sidebar>

        <Sidebar.Pusher
            dimmed={visible}
            onClick={onPusherClick}
            style={{ minHeight: "100vh" }}
        >
            <Menu fixed="top" size="huge">
                <Menu.Item>Logo here</Menu.Item>
                <Menu.Item onClick={onToggle}>
                    <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Menu position="right">
                    {rightItems.map((item, i) => (
                        <Menu.Item {...item} key={"mobile_right_" + i} />
                    ))}
                </Menu.Menu>
            </Menu>
            <Segment basic>{children}</Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
);

NavBarMobile.propTypes = {
    children: PropTypes.node,
    leftItems: PropTypes.arrayOf(PropTypes.object),
    onPusherClick: PropTypes.func,
    onToggle: PropTypes.func,
    rightItems: PropTypes.arrayOf(PropTypes.object),
    visible: PropTypes.bool
};

NavBarMobile.defaultProps = {
    leftItems: [],
    rightItems: []
};

const NavBarDesktop = ({ leftItems, rightItems }) => (
    <Menu fixed="top" inverted size="huge">
        <Menu.Item>Logo here</Menu.Item>
        {leftItems.map((item, i) => (
            <Menu.Item {...item} key={"dt_left_" + i} />
        ))}
        <Menu.Menu position="right">
            {rightItems.map((item, i) => (
                <Menu.Item {...item} key={"dt_right_" + i} />
            ))}
        </Menu.Menu>
    </Menu>
);

NavBarDesktop.propTypes = {
    leftItems: PropTypes.arrayOf(PropTypes.object),
    rightItems: PropTypes.arrayOf(PropTypes.object)
};

NavBarDesktop.defaultProps = {
    leftItems: [],
    rightItems: []
};

const NavBarChildren = ({ children }) => (
    <Container style={{ marginTop: "5em" }}>{children}</Container>
);

NavBarChildren.propTypes = {
    children: PropTypes.node
};

class NavBar extends Component {
    state = {
        visible: false
    };

    handlePusher = () => {
        const { visible } = this.state;

        if (visible) {
            this.setState({ visible: false });
        }
    };

    handleToggle = () => this.setState({ visible: !this.state.visible });

    render() {
        const { children, leftItems, rightItems } = this.props;
        const { visible } = this.state;

        return (
            <Responsive>
                <NavBarMobile
                    leftItems={leftItems}
                    onPusherClick={this.handlePusher}
                    onToggle={this.handleToggle}
                    rightItems={rightItems}
                    visible={visible}
                >
                    <NavBarChildren>{children}</NavBarChildren>
                </NavBarMobile>
            </Responsive>
        );
    }
}

NavBar.propTypes = {
    children: PropTypes.node,
    leftItems: PropTypes.arrayOf(PropTypes.object),
    rightItems: PropTypes.arrayOf(PropTypes.object)
};

export default NavBar;
