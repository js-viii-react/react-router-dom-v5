import React, { useEffect, useContext } from "react";
import API from "../config/api";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Users = () => {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    API.get("users").then((res) => {
      dispatch({
        type: "SET_ALL_USERS",
        payload: res.data,
      });
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          #{user.id}
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Users;
