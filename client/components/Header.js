import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';
import { Menu } from 'semantic-ui-react';
import '../styles/main.scss'

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) { return <div />; }

    if (user) {
      return (
        <Menu.Menu position="right"
        style={{ width: "200px",
                 display: "flex",
                 flexDirection: "row",
                 backgroundColor: "#cccbc6"
                }}>
        <Menu.Item><a className="Link" onClick={this.onLogoutClick.bind(this)}>Logout</a></Menu.Item>
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right"
        style={{ width: "200px",
                 display: "flex",
                 flexDirection: "row",
                 backgroundColor: "#cccbc6"
                }}>
        <Menu.Item style={{ alignSelf: "flex-start"}}>
           <Link className="Link" to="/signup">Signup</Link>
        </Menu.Item>
         <Menu.Item style={{ alignSelf: "flex-end"}}>
           <Link className="Link" to="/login">Login</Link>
         </Menu.Item>
      </Menu.Menu>
      );
    }
  }

  render() {
    return (
      <Menu tabular style={{backgroundColor: "#cccbc6"}} >
        <Menu.Item>
          <Link to="/" className="Link">
            WordGenius
          </Link>
        </Menu.Item>
            {this.renderButtons()}
      </Menu>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
