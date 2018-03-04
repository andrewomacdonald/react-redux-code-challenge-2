import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import './styles.less';
import PropTypes from 'prop-types';

const propTypes = {
    addEmployee: PropTypes.func.isRequired,
};

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        console.log('addemployee props ', props);

        this.state = {
            name: '',
            phone: '',
            email: '',
            company: null,
        };

        this.addNewEmployee = this.addNewEmployee.bind(this);
        this.handleFormControlChange = this.handleFormControlChange.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    addNewEmployee(e) {
        e.preventDefault();
        const newEmployee = {...this.state};
        this.props.addEmployee(newEmployee);
    }

    handleFormControlChange(e) {
        const { value, id } = e.target;
        this.setState({
            [id]: value,
        });
    }

    handleDropdownChange(e) {
        const { value } = e.target;
        const employeeCompany = this.props.companies.filter(company => company.name === value);
        this.state.company = employeeCompany;
    }

    render() {
        return (
            <Form horizontal id="addEmployee">
                <FormGroup controlId="name">
                <ControlLabel>Name:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Employee Name"
                    onChange={this.handleFormControlChange}
                />
            </FormGroup>
            <FormGroup controlId="phone">
                <ControlLabel>Name:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.phone}
                    placeholder="Employee Phone"
                    onChange={this.handleFormControlChange}
                />
            </FormGroup>
            <FormGroup controlId="email">
                <ControlLabel>Name:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.email}
                    placeholder="Employee Email"
                    onChange={this.handleFormControlChange}
                />
            </FormGroup>
                <br />
            <FormGroup controlId="company">
                <ControlLabel>Select Company</ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleDropdownChange}>
                        {this.props.companies.map(company =>
                            <option key={company.phone}>{company.name}</option>
                        )}
                </FormControl>
            </FormGroup>
                <br />
                <Button
                    type="button"
                    form="addEmployee"
                    onClick={this.addNewEmployee}
                    >
                    SUBMIT EMPLOYEE
                </Button>
            </Form>
        );
    }
}

AddEmployee.propTypes = propTypes;
export default AddEmployee;