import { connect } from 'react-redux';
import AddEmployee from 'components/AddEmployee';
import actions from 'store/features/AddEmployee/actions';

const mapDispatchToProps = dispatch => ({
    addEmployee: employee => dispatch(actions.addEmployee(employee)),
});

const mapStateToProps = state => ({
    companies: state.showCompanies.companies,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);