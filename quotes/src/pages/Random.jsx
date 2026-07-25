import React, { useState, useEffect } from "react";

const Random = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const getRandomQuotes = async () => {
    setLoading(true);

    try {
      const requests = Array.from({ length: 4 }, () =>
        fetch(`${import.meta.env.VITE_API_URL}/quotes`, {
          headers: {
            "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
          },
        }).then((res) => res.json())
      );

      const responses = await Promise.all(requests);

      
      const quotes = responses.map((item) => item[0]).filter(Boolean);

      setData(quotes);
    } catch (error) {
      console.error("Error fetching random quotes:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomQuotes();
  }, [page]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <h1 className="random-title">RANDOM QUOTES</h1>

      <div className="random-quotes">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((el, index) => (
            <div className="quote" key={index}>
              <h2>{el.author}</h2>
              <p>{el.quote}</p>
            </div>
          ))
        )}
      </div>

      <div className="btns">
        {page > 0 && <button onClick={handlePrevious}>Previous</button>}
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default Random;