import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './styles.less';

const propTypes = {
        companies: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            phone: PropTypes.string,
            revenue: PropTypes.string,
        })),
};

class ListCompanies extends Component {
    render() {
        // const { addCompany } = this.props;
        const companies = [
            {
                name: 'company1',
                number: '12345',
                revenue: '100',
                address: '1234 Company Lane',
                id: 'abc'
            },
            {
                name: 'company2',
                number: '12345',
                revenue: '100',
                address: '1234 Company Lane',
                id: 'def'
            },
            {
                name: 'company3',
                number: '12345',
                revenue: '100',
                address: '1234 Company Lane',
                id: 'ghi'
            },
            {
                name: 'company4',
                number: '12345',
                revenue: '100',
                address: '1234 Company Lane',
                id: 'jkl'
            },
            ];

                    return (
                    <React.Fragment>
                            <div>
                            {this.props.companies.map(company => (
                               <div key={company.phone}>
                	                      <span>Name:</span><span>{company.name}</span>
                                        <br />
                	                      <span>Number:</span><span>{company.phone}</span>
                                        <br />
                	                      <span>Revenue:</span><span>{company.revenue}</span>
                                    </div>)
                        )}
                            </div>
                       </React.Fragment>
                );
            }
}

ListCompanies.propTypes = propTypes;
export default ListCompanies;