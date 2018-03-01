import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import './styles.less';

class AddCompanies extends Component {
    render() {
        return (
            <React.Fragment>
                <Form horizontal>
                    <FormGroup controlId="addCompanyForm">
                        <Col componentClass={ControlLabel} sm={2}>
                            Add Employee
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Company name" />
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Address" />
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Phone Number" />
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Revenue" />
                        </Col>
                        <Button type="submit">Submit</Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        );
    }
}

export default AddCompanies;