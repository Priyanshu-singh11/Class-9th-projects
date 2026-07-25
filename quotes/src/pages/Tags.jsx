import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const allCategories = [
  { _id: 1, name: "wisdom" },
  { _id: 2, name: "philosophy" },
  { _id: 3, name: "life" },
  { _id: 4, name: "truth" },
  { _id: 5, name: "inspirational" },
  { _id: 6, name: "relationships" },
  { _id: 7, name: "love" },
  { _id: 8, name: "faith" },
  { _id: 9, name: "humor" },
  { _id: 10, name: "success" },
  { _id: 11, name: "courage" },
  { _id: 12, name: "happiness" },
  { _id: 13, name: "art" },
  { _id: 14, name: "writing" },
  { _id: 15, name: "fear" },
  { _id: 16, name: "nature" },
  { _id: 17, name: "time" },
  { _id: 18, name: "freedom" },
  { _id: 19, name: "death" },
  { _id: 20, name: "leadership" }
];

const Tags = () => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(allCategories);
    setTags(allCategories);
    setLoading(false);
  }, []);

  useEffect(() => {
    setTags(
      data.filter((tag) =>
        tag.name.toLowerCase().includes(input.toLowerCase())
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
                placeholder="Search quotes by the tag"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <br />

            {tags.length > 0 ? (
              tags.map((elem) => (
                <Link to={`/QuoteByTag/${elem.name}`} key={elem._id}>
                  <button>{elem.name}</button>
                </Link>
              ))
            ) : (
              <h1>Not found</h1>
            )}
          </>
        )}
      </div>

      {loading && <h1>Loading...</h1>}
    </>
  );
};

export default Tags;