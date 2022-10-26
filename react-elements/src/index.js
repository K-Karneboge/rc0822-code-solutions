import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = React.createElement('h1', null, 'hello, react!');
console.log(reactElement);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(reactElement);
