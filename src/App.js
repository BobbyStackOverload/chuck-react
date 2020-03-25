import React from "react";
import Quote from "./components/quote";
import RefreshQuote from "./components/refreshQuote";
import "./App.css";

export default function App() {
  const theQuote = "Chuck Norris Who?!?";
  const theRefreshQuote = "I'll be dayum!";
  return (
    <div className="App">
      <h1>Chuck 2020</h1>
      <Quote quote={theQuote} />
      <RefreshQuote RefreshQuote={theRefreshQuote} />
    </div>
  );
}
