import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultPage extends Component {
  render() {
    return (
      <React.Fragment>
	      <div className="LeftPanel"> 
	         This is the Result
	      </div>
	      <div className="SubnitButton"><Link to="/">Simulate Again</Link> </div>
      </React.Fragment>
    );
  }
}

export default ResultPage;

