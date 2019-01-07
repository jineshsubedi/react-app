import React, {Component} from 'react';

function Quotation(props) {
	return <p>{props.quote}</p>;
}
const element = <Quotation quote="Find a place inside where there's joy, and the joy will burn out the pain."/>

class Quote extends Component {
	render() {
		return element
	};
}
export default Quote;