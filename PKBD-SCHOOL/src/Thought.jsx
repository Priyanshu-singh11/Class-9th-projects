import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";
import Loader from "./Loader.jsx";
import "./Thought.css";

const Thought = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [skip, setSkip] = useState(0);

  const Getuserdata = async () => {
    try {
      setLoad(true);

      const response = await fetch(
        `https://dummyjson.com/quotes?limit=8&skip=${skip}`
      );

      const result = await response.json();

      if (skip === 0) {
        setData(result.quotes);
      } else {
        setData((prev) => [...prev, ...result.quotes]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    Getuserdata();
  }, [skip]);

  return (
    <div className="container-of-quotes">
      <h1 className="thought">Daily Thoughts</h1>

      <div className="q-row">
        {data.map((elem) => (
          <div className="box" key={elem.id}>
            <LazyLoad height={80}>
              <img
                src={`https://picsum.photos/100?random=${elem.id}`}
                alt={elem.author}
              />
            </LazyLoad>

            <div className="content">
              <p className="quote">"{elem.quote}"</p>
              <p className="author">— {elem.author}</p>
            </div>
          </div>
        ))}
      </div>

      {load && <Loader />}

      <button
        className="btn"
        onClick={() => setSkip((prev) => prev + 8)}
      >
        More →
      </button>
    </div>
  );
};

export default Thought;