import React, { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const submitform = async (e) => {
    e.preventDefault();

    if (!name || !email || !number || !password || !comment) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const userdata = {
      name,
      email,
      number,
      password,
      comment,
    };

    try {
      const response = await fetch(
        "https://instagram-cfb97-default-rtdb.firebaseio.com/insta.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        }
      );

      if (response.ok) {
        alert("Data Saved Successfully");

        setName("");
        setEmail("");
        setNumber("");
        setPassword("");
        setComment("");
      } else {
        alert("Failed to save data");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">

      <form onSubmit={submitform}>

        <h2>Contact Form</h2>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={5}
            maxLength={15}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            maxLength={12}
            required
          />
        </div>

        <div className="mb-3">
          <label>Comment</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            minLength={10}
            maxLength={100}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          {loading ? "Saving..." : "Submit"}
        </button>

      </form>

    </div>
  );
}

export default Contact;