import { connect } from 'react-redux';
import { receiveSearch } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  receiveSearch: (query) => dispatch(receiveSearch(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);