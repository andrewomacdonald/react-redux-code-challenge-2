import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import AddCompanies from 'containers/AddCompanies';
import ListCompanies from 'containers/ListCompanies';
import AddEmployee from 'containers/AddEmployee';
import ListEmployees from 'containers/ListEmployees';

const propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	resetNumberToZero: PropTypes.func.isRequired,
};


class HomePage extends Component {
	render() {
		const {	increment, decrement, resetNumberToZero, addCompany } = this.props;
		return (
				<div className="homePage">
					<div>
						<button	onClick={increment}>
							Increment
						</button>
						<button	onClick={decrement}>
							Decrement
						</button>
						<button	onClick={resetNumberToZero}>
							Reset Number
						</button>
					</div>
						<ListCompanies />
						<AddCompanies />
						<br />
						<AddEmployee />
				</div>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;