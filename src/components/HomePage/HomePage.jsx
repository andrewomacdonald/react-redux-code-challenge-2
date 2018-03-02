import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import AddCompanies from "../AddCompanies/AddCompanies";
import ListCompanies from '../ListCompanies/ListCompanies';
import AddEmployee from '../AddEmployee/AddEmployee';

const propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	resetNumberToZero: PropTypes.func.isRequired,
};


class HomePage extends Component {
	render() {
		const {	increment, decrement, resetNumberToZero, addCompany } = this.props;
		return (
			<React.Fragment>
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
						<ListCompanies></ListCompanies>
						<AddCompanies></AddCompanies>
						<br />
						<AddEmployee></AddEmployee>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;