import React, {Component} from 'react';
function formatName(user) {
	return user.fName+' '+user.lName;
}
function formatTime(){
	var date = new Date().toLocaleTimeString();
	return date;
}

const user = {
	fName: 'Jinesh',
	lName: 'Subedi'
};

class Service extends Component {
	constructor(props, context){
		super(props)
	}

	render(){
		console.log(this.props)
		return (
			<div className="container">
			<div className="card">
				<div className="card-header">
					<h3>Welcome {formatName(user)}!</h3>
					<p></p>
				</div>
				<div className="class-body">
					<p>{this.props.tagline}</p>
				</div>
				<div className="card-footer">
					<p>Copywrite &copy; jineshsubedi - {formatTime()}</p>
				</div>
			</div>
	</div>
)
	};
}
export default Service;
