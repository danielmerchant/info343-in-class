import React from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {		
		return (
			<div className="center-text">
				<form id="city-search">
					<div className="mdl-textfield mdl-js-textfield">
						<input className="mdl-textfield__input" type="text" id="search-form"></input>
						<label className="mdl-textfield__label" htmlFor="search-form">Search a city...</label>
					</div>
				</form>
			</div>
		);
	}
}	