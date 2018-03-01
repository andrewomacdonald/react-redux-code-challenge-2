import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './styles.less';
console.log('PropTypes ', PropTypes);
const propTypes = {
    addCompany: PropTypes.func.isRequired,
};
console.log('addCompany ', addCompany);
console.log('weedlord bonerhitler ', propTypes);

class ListCompanies extends Component {
    render() {
        const { addCompany } = this.props;
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
                <Button onClick={addCompany} type="submit">Submit</Button>
                <div>
                {companies.map(company => {
                    return <div key={company.id}>
                        Name:{company.name}
                        <br />
                        Number: {company.number}
                        <br />
                        Revenue: {company.revenue}
                    </div>
                })
                }
                </div>
            </React.Fragment>
        );
    }
}

ListCompanies.propTypes = propTypes;
export default ListCompanies;