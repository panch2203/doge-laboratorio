import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class DogeMeme extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { topval: 'MUCH WOW',
		botval: 'MUCH FLUFFINESS'};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleChange2 = this.handleChange2.bind(this);
	    this.resset = this.resset.bind(this);
 	}

 	handleChange(event) {
    	this.setState({topval: event.target.value.toUpperCase()});    	
 	}

 	handleChange2(event) {
 		this.setState({botval: event.target.value.toUpperCase()});    	
 	}

 	resset() {
 		this.setState({topval: 'MANY EDITS', botval: 'SO SCARE'});
 	}

	render(){
		return (
			<div className="info">
				<div className="rrow">
					<form>
					  <label className="lbl">
					    Cambio:
					  </label>
					    <input type="text" name="topname" onChange={this.handleChange} />
					    <input type="text" name="bottomname" onChange={this.handleChange2} />				   				  
					</form>
					<button className="btnres" onClick={this.resset}>RESET</button>
				</div>
				<p className="top">{this.state.topval}</p>
				<p className="bottom">{this.state.botval}</p>
			</div>
		);		
	}
}

// ========================================

ReactDOM.render(
  <DogeMeme />,
  document.getElementById('root')
);

