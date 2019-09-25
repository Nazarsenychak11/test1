import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App';

import * as actions from './actions';
import {
    selectFilteredUsers,
    selectLoading,
    selectError,
    selectSearchUsersByFirstName,
    selectSearchUsersByLastName,
    selectSearchUsersBySex,
    selectSearchUsersByAge,
} from './selectors';

const mapStateToProps = state => ({
    users: selectFilteredUsers(state),
    loading: selectLoading(state),
    error: selectError(state),
    searchUsersByFirstName: selectSearchUsersByFirstName(state),
    searchUsersByLastName: selectSearchUsersByLastName(state),
    searchUsersBySex: selectSearchUsersBySex(state),
    searchUsersByAge: selectSearchUsersByAge(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadUsers: actions.loadUsers,
    searchUsersByFirstNameChange: actions.searchUsersByFirstNameChange,
    searchUsersByLastNameChange: actions.searchUsersByLastNameChange,
    searchUsersByAgeChange: actions.searchUsersByAgeChange,
    searchUsersBySexChange: actions.searchUsersBySexChange,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
