import { connect } from 'react-redux';
import ListCompanies from 'components/ListCompanies';
import actions from 'store/features/showCompanies/actions';

const mapStateToProps = state => ({
  companies: state.showCompanies.companies,
});

export default connect(mapStateToProps)(ListCompanies);

