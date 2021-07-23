import React from 'react';

class Head extends React.Component {
	constructor() {
		super();
		this.state = {
			existing: false
		}
	}

	componentDidMount() {
		setTimeout(() => {this.setState({existing: true})}, 3000);
	}

	render() {
		let existingText = this.state.existing ? 'Its old now' : 'Its fresh';
		return (
			<div>This is Head Class. {existingText}.</div>
		)
	}
}

export default Head;