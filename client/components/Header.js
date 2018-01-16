import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';
import { Menu } from 'semantic-ui-react';

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
        <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
      );
    } else {
      return (
        <Menu.Menu position="right"
        style={{ width: "200px",
                 display: "flex",
                 flexDirection: "row",
                }}>
        <Menu.Item style={{ alignSelf: "flex-start"}}>
           <Link to="/signup">Signup</Link>
        </Menu.Item>
         <Menu.Item style={{ alignSelf: "flex-end"}}>
           <Link to="/login">Login</Link>
         </Menu.Item>
      </Menu.Menu>
      );
    }
  }

  render() {
    return (
      <Menu tabular>
        <Menu.Item>
          <Link to="/" className="brand-logo left">
            Home
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
