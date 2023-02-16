import React from "react";
import { useState, useEffect } from "react";
import awsmobile from "../aws-exports";
import { Amplify, API } from "aws-amplify";

Amplify.configure(awsmobile);
API.configure(awsmobile);

const myAPI = "test1API";
const path = "/items";

export default function Message() {
   const apiUrl = 'https://test1API.execute-api.AWS::Region.amazonaws.com/env';
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => console.log('This is your data', data));
 }
 render() {
   return <h1>my Component has Mounted, Check the browser 'console' </h1>;
 }

