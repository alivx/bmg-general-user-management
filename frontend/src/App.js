import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Motion, spring } from 'react-motion';
import NavigationPanel from './components/NavigationPanel';
import Modal from './components/Modal';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}

	render() {
		const { mounted } = this.state;

		let child;

		if (mounted) {
			child = (
				<div className="App_test">
					<NavigationPanel></NavigationPanel>
					<Modal onSubmit={(e) => { e.preventDefault() }} />
				</div>
			);
		}

		return (
			<div className="App">
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default App;
