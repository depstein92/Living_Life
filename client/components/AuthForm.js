import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <Segment inverted style={{ width: "40%"}}>
        <Form inverted onSubmit={this.onSubmit.bind(this)}>
          <Form.Group widths='equal'>
            <Form.Input
              fluid id='form-subcomponent-shorthand-input-first-name'
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Form.Input
              fluid id='form-subcomponent-shorthand-input-first-name'
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value})}
            />
          </Form.Group>
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <Button>Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default AuthForm;
