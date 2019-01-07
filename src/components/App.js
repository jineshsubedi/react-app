import React, {Component} from 'react';
import Service from './Service';
import Quote from './Quote';
import JineshSubedi from './JineshSubedi';

function handleClick(e) {
	e.preventDefault();
	alert('you must be learning react!')
}
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: "Find a place inside where there's joy, and the joy will burn out the pain.",
			service: "web hosting"
		}
	}
	render() {
		return (
			<div className="theme">
				<div className="menu">
					<h1>JINESH SUBEDI</h1>
					<Service age="20" card={true} tagline="this is service"/>
					<JineshSubedi/>
					<Quote/>
					
					<a href="#" className="btn btn-sm btn-primary" onClick={handleClick}>
						Handle Event alert
					</a>
				</div>
			</div>
		);
	}
}
export default App;