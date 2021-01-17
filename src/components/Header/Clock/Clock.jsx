import css from './Clock.module.css';
import React from 'react';


export default class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return (
			<div className={css.Clock}>
				{this.state.date.toLocaleTimeString()}
			</div>
		)
	}
}

