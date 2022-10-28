import React from 'react';

import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.state = { username: '', password: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  render(props) {
    return (
    <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username<input type="text" id="username" value={this.state.username} onChange={this.handleUsernameChange}/></label>
        <label htmlFor="password">Password <input type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange}/></label>
      <button> Sign Up </button>
    </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm/>);
