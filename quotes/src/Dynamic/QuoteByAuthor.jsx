import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuoteByAuthor = () => {
  const { author } = useParams();

  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const authorName = decodeURIComponent(author);
  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const requests = Array.from({ length: 5 }, () =>
        fetch(
          `${import.meta.env.VITE_API_URL}/quotes?author=${encodeURIComponent(
            authorName
          )}`,
          {
            headers: {
              "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
            },
          }
        ).then((res) => res.json())
      );
      const responses = await Promise.all(requests);

      const allQuotes = responses.flat();

  
      const uniqueQuotes = allQuotes.filter(
        (quote, index, self) =>
          index === self.findIndex((q) => q.quote === quote.quote)
      );
      setQuotes(uniqueQuotes);
    } catch (error) {
      console.error("Error:", error);
      setQuotes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [author, page]);

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
      <h1 className="title">
        Quotes by {author.replace(/-/g, " ")}
      </h1>

      <div className="quotesbyTag">
        <div className="quotebyTag">
          {quotes.length > 0 ? (
            quotes.map((quote, index) => (
              <div key={index}>
                <h2>{quote.author}</h2>
                <p>{quote.quote}</p>
              </div>
            ))
          ) : (
            <p>No quotes found.</p>
          )}
        </div>
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

export default QuoteByAuthor;