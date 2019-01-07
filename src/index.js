import React from 'react';
import {render} from 'react-dom';
// import ReactDOM from 'react-dom';
import './css/index.css';
// import {BrowserRouter, Match, Miss} from 'react-router';
import App from './components/App';
import Service from './components/Service';
import JineshSubedi from './components/JineshSubedi';
import Quote from './components/Quote';
import Form from './components/Form';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const Root = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/service" component={Service} />
				<Route exact path="/jinesh" component={JineshSubedi} />
				<Route exact path="/quote" component={Quote} />
				<Route exact path="/form" component={Form} />
				<Route  component={NotFound} />
			</Switch>
		</Router>
	);
};

render(<Root />, document.querySelector('#main'));