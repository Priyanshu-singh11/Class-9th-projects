import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const authorList = [
  { _id: 1, name: "Albert Einstein", slug: "Albert Einstein" },
  { _id: 2, name: "Mark Twain", slug: "Mark Twain" },
  { _id: 3, name: "Mahatma Gandhi", slug: "Mahatma Gandhi" },
  { _id: 4, name: "Confucius", slug: "Confucius" },
  { _id: 5, name: "Oscar Wilde", slug: "Oscar Wilde" },
  { _id: 6, name: "Buddha", slug: "Buddha" },
  { _id: 7, name: "Bruce Lee", slug: "Bruce Lee" },
  { _id: 8, name: "Napoleon Hill", slug: "Napoleon Hill" },
  { _id: 9, name: "Steve Jobs", slug: "Steve Jobs" },
  { _id: 10, name: "Dalai Lama", slug: "Dalai Lama" },
  { _id: 11, name: "Mother Teresa", slug: "Mother Teresa" },
  { _id: 12, name: "Abraham Lincoln", slug: "Abraham Lincoln" },
  { _id: 13, name: "William Shakespeare", slug: "William Shakespeare" },
  { _id: 14, name: "Benjamin Franklin", slug: "Benjamin Franklin" },
  { _id: 15, name: "Ralph Waldo Emerson", slug: "Ralph Waldo Emerson" },
  { _id: 16, name: "Helen Keller", slug: "Helen Keller" },
  { _id: 17, name: "George Bernard Shaw", slug: "George Bernard Shaw" },
  { _id: 18, name: "John Lennon", slug: "John Lennon" },
  { _id: 19, name: "Lao Tzu", slug: "Lao Tzu" },
  { _id: 20, name: "Martin Luther King Jr", slug: "Martin Luther King Jr" },
  { _id: 21, name: "Rabindranath Tagore", slug: "Rabindranath Tagore" }
];

const Authors = () => {
  const [data, setData] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const limit = 21;

  const handleNext = () => {
    const totalPages = Math.ceil(authorList.length / limit);
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const getAuthors = () => {
    setLoading(true);

    setData(authorList);
    setAuthors(authorList);

    setLoading(false);
  };

  useEffect(() => {
    getAuthors();
  }, [page]);

  useEffect(() => {
    setAuthors(
      data.filter((author) =>
        author.name.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input, data]);

  return (
    <>
      <div className="tags" id="tags">
        {!loading && (
          <>
            <div className="tag-input-box">
              <input
                type="text"
                name="tag"
                placeholder="Search by the author name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <br />
            {authors.length > 0 ? (
              authors.map((elem) => (
                <Link
                  to={`/QuoteByAuthor/${encodeURIComponent(elem.slug)}`}
                  key={elem._id}
                >
                  <button>{elem.name}</button>
                </Link>
              ))
            ) : (
              <h1>Search not found</h1>
            )}
          </>
        )}
      </div>

      {!loading && (
        <div className="btns">
          {page > 1 && <button onClick={handlePrevious}>Previous</button>}
          {page < Math.ceil(authorList.length / limit) && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      )}

      {loading && <h1>Loading...</h1>}
    </>
  );
};

export default Authors;