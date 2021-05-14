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
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/81QRyjf28tS._AC_UL200_SR200,200_.jpg'
      alt='Book-image'
    />
  );
};
const Title = () => <h1>Oh, the Places You'll Go! </h1>;
const Author = () => <h4>Dr. Seuss</h4>;
ReactDom.render(<Booklist />, document.getElementById('root'));
