import React from 'react';

import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    const checkbox = document.querySelector('.checkbox');
    if (checkbox.checked === true) {
      checkbox.checked = false;
    } else { checkbox.checked = true; }
  }

  render(props) {
    return (
    <div onClick={this.handleClick} className="container">
      {this.label}
      <div className="toggle-switch">
          <input type="checkbox" className="checkbox" name={this.label} id={this.label} />
          <label className="label" htmlFor={this.label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>);
  }

}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton label="test"/>);
