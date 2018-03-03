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
				<div className="home__wrapper">
					<div className="home__abacus">
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
					<div className="container">
						<ListCompanies />
						<AddCompanies />
						<br />
						<AddEmployee />
						<ListEmployees />
					</div>
				</div>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;