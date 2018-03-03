import { connect } from 'react-redux';
import ListEmployees from 'components/ListEmployees';
import actions from 'store/features/AddEmployee/actions'

const mapStateToProps = state => ({
    employees: state.addEmployee.employees,
});

export default connect(mapStateToProps)(ListEmployees);