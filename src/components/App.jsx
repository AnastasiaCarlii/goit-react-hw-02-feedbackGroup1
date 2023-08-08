import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleGoodFeedback}>Good</button>
        <button onClick={this.handleNeutralFeedback}>Neutral</button>
        <button onClick={this.handleBadFeedback}>Bad</button>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default App;

// return (
//   <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101'
//     }}
//   >
//   <
//   </div>);
