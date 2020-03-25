import React, { Component } from "react";

class RefreshQuote extends Component {
    state = {
        RefreshQuote: "Duck Chuck"
    };

  render() {
    const { RefreshQuote } =this.state;
    return (
        <p>{RefreshQuote}</p>
        
    );
  }
}

export default RefreshQuote;