import React from 'react';

const element = React.createElement(
	'h1',
	{className: 'alert-primary'},
	'Welcome!',
);
class Greeting extends React.Component {
	render(){
	return element
	};
}
export default Greeting;
