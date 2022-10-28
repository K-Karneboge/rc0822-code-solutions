import React from 'react';

import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  UnclickButton(props) {
    return <button onClick={this.handleClick}>{this.props.text}</button>;
  }

  ClickedButton(props) {
    return <button> CLICKED! </button>;
  }

  handleClick(e) {
    this.setState({ isClicked: true });
  }

  render(props) {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return this.ClickedButton();
    } else if (!isClicked) {
      return this.UnclickButton();
    }
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton text="test"/>);
