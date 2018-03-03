import { connect } from 'react-redux';
import AddEmployee from 'components/AddEmployee';
import actions from 'store/features/AddEmployee/actions';

const mapDispatchToProps = dispatch => ({
    addEmployee: employee => dispatch(actions.addEmployee(employee)),
});

export default connect(null, mapDispatchToProps)(AddEmployee);