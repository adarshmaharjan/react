import React from 'react';

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert('Hello World');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='Book' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Alert
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        Complex One
      </button>
    </article>
  );
};

export default Book;
