import { connect } from 'react-redux';
import ListCompanies from 'components/ListCompanies';
import actions from 'store/features/showCompanies/actions'

const mapDispatchToProps = dispatch => ({
    addCompany: () => dispatch(actions.addCompany()),
});

export default connect(null, mapDispatchToProps)(ListCompanies);

