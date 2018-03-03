import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const propTypes = {
    employees: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
    }))
}


class ListEmployees extends Component {
    render() {
        console.log('gaylord bonerhitler ',this.props.employees);
        return (
            <React.Fragment>
                {this.props.employees.map(employee =>
                <div key={employee.phone}>
                    <span>Name: {employee.name}</span>
                </div>
                )}
            </React.Fragment>
        )
    }
}

export default ListEmployees;