import React, { Component } from "react";

class Quote extends Component {
    state = {
        quote: "Chuck Norris aint shhhh"
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                quote: "Chuck is meaner than a junkyard dawg"
            });
        }, 2000);
    }


  render() {
    const { quote } = this.state;
    return (
        <p>{quote}</p>
    
    );
  }
}

export default Quote;