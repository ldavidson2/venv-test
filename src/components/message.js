import React from "react";
import { useState, useEffect } from "react";
import awsmobile from "../aws-exports";
import { Amplify, API } from "aws-amplify";

Amplify.configure(awsmobile);
API.configure(awsmobile);

const myAPI = "test1API";
const path = "/items";

export default function Message() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://test1API.execute-api.AWS::Region.amazonaws.com/items")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.PK}>{user.companyName}</li>
        ))}
      </ul>
    );
  }
}
