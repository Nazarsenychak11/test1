import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ShowUsersList from './components/Users/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


function App({ loading, users, error, loadUsers, searchUsers }) {

	console.log(searchUsers)
	useEffect(() => {
		loadUsers();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Some error occurred. Please try again later</div>;
	}

	return (
		<div>
			<CssBaseline />
			<Container fixed>
				<ShowUsersList users={users} searchUsers={searchUsers}/>
			</Container>
		</div>
	);
}

App.propTypes = {
	users: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.object,

	loadUsers: PropTypes.func.isRequired
};

export default App;
