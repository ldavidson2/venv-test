import "./App.css";
import { Routes, Route } from "react-router-dom";
import Message from "./components/message";

function callApi() {
  fetch('https://test1API.execute-api.AWS::Region.amazonaws.com/items', { method: 'GET' })
    .then(data => data.json()) 
    .then(json => alert(JSON.stringify(json)))
}

function App() {
  return (
    <div className="App">
      <button onClick={callApi}>Call API</button>
    </div>
  );
}

export default App;
