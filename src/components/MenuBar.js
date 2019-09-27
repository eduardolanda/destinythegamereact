import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const styles = {
      color: "white",
      fontSize: "15px",
      fontWeight: "bold"
    };
    return (
      <Menu style={{ backgroundColor: "#8080809c" }}>
        <Menu.Item
          name="eduardo"
          active={activeItem === "eduardo"}
          onClick={this.handleItemClick}
          style={styles}
          as={Link}
          to="/"
        >
          Eduardo
        </Menu.Item>

        <Menu.Item
          name="github"
          active={activeItem === "github"}
          onClick={this.handleItemClick}
          style={styles}
          as={Link}
          to="/github"
        >
          Github
        </Menu.Item>

        <Menu.Item
          name="LinkedIn"
          active={activeItem === "LinkedIn"}
          onClick={this.handleItemClick}
          style={styles}
          as={Link}
          to="/linkedin"
        >
          LinkedIn
        </Menu.Item>
      </Menu>
    );
  }
}
