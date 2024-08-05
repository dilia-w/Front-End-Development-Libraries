const { useState, useEffect } = React;

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">- {author}</p>
      <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
      <a 
        id="tweet-quote" 
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <QuoteBox />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
