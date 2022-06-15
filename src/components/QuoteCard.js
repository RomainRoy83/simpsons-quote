import React from 'react';
import './css/quoteCard.css';



const QuoteCard = ({ quote, character, image }) => (
  <figure className="QuoteCard">
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;