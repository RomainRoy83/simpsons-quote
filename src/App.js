import './App.css';

import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {

  const [simpsons, setSimpsons] = useState(' ');
  
  const getQuotes = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      setSimpsons(data);
    })
  }
  
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className='App'>
      <button className='quoteButton' onClick={getQuotes}>Give me a Simpsons quote !</button>
      <QuoteCard quote={simpsons[0].quote} character={simpsons[0].character} image={simpsons[0].image} />
    </div>
  );
}

export default App;