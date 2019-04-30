import { connect } from 'react-redux';
import { fetchAllHomes } from '../../actions/home_actions';
import HomeIndex from './home_index';

const mapStateToProps = ({ entities: { homes, search } }) => ({
  homes: Object.values(homes),
  search: search,
});

const mapDispatchToProps = dispatch => ({
  fetchAllHomes: () => dispatch(fetchAllHomes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);