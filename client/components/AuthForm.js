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
      <div className="row">
        <Form onSubmit={this.onSubmit.bind(this)} className="col s6">
          <div className="input-field">
            <Form.Input
              fluid id='form-subcomponent-shorthand-input-first-name'
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <Form.Input
              fluid id='form-subcomponent-shorthand-input-first-name'
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value})}
            />
          </div>
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <Button>
          Submit</Button>
        </Form>
      </div>
    );
  }
}


const FormExampleInverted = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='First name' />
        <Form.Input fluid label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)

export default AuthForm;
