import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App';

import { loadUsersRequest, searchUsersField } from './actions';
import { selectUsers, selectLoading, selectError } from './selectors';

const mapStateToProps = state => ({
    users: selectUsers(state),
    loading: selectLoading(state),
    error: selectError(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadUsers: loadUsersRequest,
    searchUsers: searchUsersField
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
