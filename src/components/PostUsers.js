import React, { useState } from "react";
import API from "../config/api";

const PostUsers = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("users", {
      user: { name, userName: "nebojsa", phoneNumber: "123456789" },
    }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Person name:
        <input type="text" onChange={handleChange} />
        <button type="submit">Add person</button>
      </form>
    </div>
  );
};

export default PostUsers;
