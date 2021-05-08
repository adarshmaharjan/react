import React from 'react';
import ReactDom from 'react-dom';

const Greetings = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

ReactDom.render(<Greetings />, document.getElementById('root'));
