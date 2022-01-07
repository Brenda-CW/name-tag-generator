//Lesson: https://learn.skillcrush.com/module-5/write-a-functional-component/

import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import { names } from "./data.js";

import "./styles.css";

//Callback function that renders a name tag for each name - with instructions to pull the name from the data file
const renderNameTag = (name) => <NameTag name={name.name} key={name.id} />;

const App = () => {
  //new array that holds the values of the names data & calls the renderNameTag function
  const nameTagElements = names.map(renderNameTag);
  //displays the page heading and triggers the array mapping and sending data to the NameTag component to render each tag
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {nameTagElements}
    </div>
    //WHY CURLY BRACES for nameTagElements???
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
