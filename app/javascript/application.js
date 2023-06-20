// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import Greetings from "./greetings";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      < Greetings />
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);