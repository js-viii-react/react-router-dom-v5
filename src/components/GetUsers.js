import React, { useState, useEffect } from "react";
import API from "../config/api";
import DeleteUsers from "./DeleteUsers";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  // https://jsonplaceholder.typicode.com/users

  useEffect(() => {
    API.get("users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const removeUser = (id) => {
    console.log("remove User");
    const filteredUsers = users.filter((user) => user.id !== parseInt(id));
    setUsers(filteredUsers);
  };

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <DeleteUsers users={users} removeUser={removeUser} />
    </>
  );
};

export default GetUsers;
