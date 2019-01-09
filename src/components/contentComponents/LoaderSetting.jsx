import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './LoaderSetting.css';

class LoaderSetting extends Component {
  render() {
    return (
      <React.Fragment>
	      <div className="LeftPanel"> 
	         <select>
			  <option value="0-100">0-100</option>
			  <option value="100-200">100-200</option>
			  <option value="200-500">200-500</option>
			  <option value="500-1000">500-1000</option>
			  <option value="1000-1500">1000-1500</option>
			</select> 
	      </div>
	      <div className="RightPanel">
	      </div>
	      <div className="SubnitButton"> <Link to="/resultPage">Submit</Link> </div>
      </React.Fragment>
    );
  }
}

export default LoaderSetting;

