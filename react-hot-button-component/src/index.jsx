import React from 'react';

import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clickedCount: 0 };
  }

  handleClick(e) {
    this.setState({ clickedCount: (this.state.clickedCount + 1) });
  }

  render(props) {
    const clicks = this.state.clickedCount;
    let classThing = null;
    if (clicks >= 18) {
      classThing = 'button button7';
    } else if (clicks >= 15) {
      classThing = 'button button6';
    } else if (clicks >= 12) {
      classThing = 'button button5';
    } else if (clicks >= 9) {
      classThing = 'button button4';
    } else if (clicks >= 6) {
      classThing = 'button button3';
    } else if (clicks >= 3) {
      classThing = 'button button2';
    } else {
      classThing = 'button button1';
    }
    return <button onClick={this.handleClick} className={classThing}> Hot Button </button>;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton text="test" />);
