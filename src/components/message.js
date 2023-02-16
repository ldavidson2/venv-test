import React from "react";
import { useState, useEffect } from "react";
import awsmobile from "../aws-exports";
import { Amplify, API } from "aws-amplify";

Amplify.configure(awsmobile);
API.configure(awsmobile);

const myAPI = "test1API";
const path = "/items";

export default function Message() {
  const [result, setresult] = useState(null);
  const message = async () => {
    try {
      let res = await API.get(myAPI, path, {});
      let result = res.data;
      setresult(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    message();
  }, []);
  return (
    <div>
      <h1>Results:</h1>
      {result}
    </div>
  );
}
