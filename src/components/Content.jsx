import React, { Component } from 'react';

import './Content.css';

class Content extends Component {
  render() {
    return (
      <React.Fragment>
	      <div className="LeftPanel"> 
	         <select>
			  <option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
			  <option value="mercedes">Mercedes</option>
			  <option value="audi">Audi</option>
			</select> 
	      </div>
	      <div className="RightPanel">
	      </div>
	      <div className="SubnitButton"> <input type="submit" value="Submit" /> </div>
      </React.Fragment>
    );
  }
}

export default Content;

