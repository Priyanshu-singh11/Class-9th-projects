import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Local quotes database
const quotesData = [
  {
    id: 1,
    category: "love",
    author: "Mother Teresa",
    quote: "Spread love everywhere you go."
  },
  {
    id: 2,
    category: "love",
    author: "Maya Angelou",
    quote: "Love recognizes no barriers."
  },
  {
    id: 3,
    category: "love",
    author: "Oscar Wilde",
    quote: "Keep love in your heart."
  },

  {
    id: 4,
    category: "success",
    author: "Winston Churchill",
    quote: "Success is not final, failure is not fatal."
  },
  {
    id: 5,
    category: "success",
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop."
  },

  {
    id: 6,
    category: "life",
    author: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
  },

  {
    id: 7,
    category: "wisdom",
    author: "Confucius",
    quote: "Everything has beauty, but not everyone sees it."
  },

  {
    id: 8,
    category: "freedom",
    author: "Nelson Mandela",
    quote: "To be free is not merely to cast off one's chains."
  },

  {
    id: 9,
    category: "leadership",
    author: "John C. Maxwell",
    quote: "A leader is one who knows the way, goes the way, and shows the way."
  },

  {
    id: 10,
    category: "happiness",
    author: "Dalai Lama",
    quote: "Happiness is not something ready made. It comes from your own actions."
  }
];

const QuoteByTag = () => {
  const { tag } = useParams();

  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = () => {
    setLoading(true);

    const filtered = quotesData.filter(
      (item) => item.category.toLowerCase() === tag.toLowerCase()
    );

    setQuotes(filtered);

    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, [tag, page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h1 className="title">Quotes tagged with "{tag}"</h1>

      <div className="quotesbyTag">
        {quotes.length > 0 ? (
          quotes.map((quote, index) => (
            <div className="quotebyTag" key={index}>
              <h2>{quote.author}</h2>
              <p>{quote.quote}</p>
            </div>
          ))
        ) : (
          <p>No quotes found.</p>
        )}
      </div>

      <div className="btns">
        {page > 1 && (
          <button onClick={handlePreviousPage}>Previous</button>
        )}
        <button onClick={handleNextPage}>Next</button>
      </div>
    </>
  );
};

export default QuoteByTag;