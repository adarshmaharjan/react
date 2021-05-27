import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';
//
const Booklist = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  const title = 'I Love You to The Moon And Back';
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/81QRyjf28tS._AC_UL200_SR200,200_.jpg'
        alt='Book'
      />
      <h1>{title}</h1>
      <h4>Dr. Seuss</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));
