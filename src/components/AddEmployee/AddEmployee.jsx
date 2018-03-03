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
        };

        this.addNewEmployee = this.addNewEmployee.bind(this);
        this.handleFormControlChange = this.handleFormControlChange.bind(this);
    }

    addNewEmployee(e) {
        e.preventDefault();
        const newEmployee = {...this.state};
        this.props.addEmployee(newEmployee);
    }

    handleFormControlChange(e) {
        const { value, id } = e.target;
        console.log('weedlord bonerhitler ', value);
        console.log('bonerhitler ', id)
        this.setState({
            [id]: value,
        });
    }

    render() {
        return (
            <div>
            <Form horizontal id="addEmployee">
                <FormGroup controlId="Name">
                <ControlLabel>Name:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Employee Name"
                    onChange={this.handleFormControlChange}
                />
            </FormGroup>
            <FormGroup controlId="Phone">
                <ControlLabel>Name:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.phone}
                    placeholder="Employee Phone"
                    onChange={this.handleFormControlChange}
                />
            </FormGroup>
            <FormGroup controlId="Email">
                <ControlLabel>Name:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.email}
                    placeholder="Employee Email"
                    onChange={this.handleFormControlChange}
                />
            </FormGroup>
                <Button
                    type="button"
                    form="addEmployee"
                    onClick={this.addNewEmployee}
                    >
                    SUBMIT EMPLOYEE
                </Button>
            </Form>
                </div>
        );
    }
}

AddEmployee.propTypes = propTypes;
export default AddEmployee;