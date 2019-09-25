import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import UsersList from './components/UsersList';
import UserFilters from './components/UserFilters'

function App({
	loading,
	users,
	error,
	loadUsers,

	searchUsersByFirstName,
	searchUsersByLastName,
	searchUsersBySex,
	searchUsersByAge,

	searchUsersByFirstNameChange,
	searchUsersByLastNameChange,
	searchUsersByAgeChange,
	searchUsersBySexChange
}) {
	useEffect(() => {
		loadUsers();
	}, []);

	function onChangeFirstNameFilter({ target: { value } }) {
		searchUsersByFirstNameChange(value);
	}

	function onChangeLastNameFilter({ target: { value } }) {
		searchUsersByLastNameChange(value);
	}

	function onChangeAgeFilter({ target: { value } }) {
		searchUsersByAgeChange(value);
	}

	function onChangeSexFilter(sex) {
		const nextSex = searchUsersBySex.includes(sex)
			? searchUsersBySex.filter(s => s !== sex)
		  : [...searchUsersBySex, sex];

		searchUsersBySexChange(nextSex);
	}

	if (loading) {
		return (
			<div>
				Loading...
			</div>
		);
	}

	if (error) {
		return (
			<div>
				Some error occurred. Please try again later
			</div>
		);
	}

	return (
		<div>
			<CssBaseline />
			<Container fixed>
				<UserFilters
					searchUsersByFirstName={searchUsersByFirstName}
					searchUsersByLastName={searchUsersByLastName}
					searchUsersBySex={searchUsersBySex}
					searchUsersByAge={searchUsersByAge}

					onChangeFirstNameFilter={onChangeFirstNameFilter}
					onChangeLastNameFilter={onChangeLastNameFilter}
					onChangeAgeFilter={onChangeAgeFilter}
					onChangeSexFilter={onChangeSexFilter}
				/>
				<UsersList
					users={users}
				/>
			</Container>
		</div>
	);
}

App.propTypes = {
	users: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.object,

	searchUsersByFirstName: PropTypes.string,
	searchUsersByLastName: PropTypes.string,
	searchUsersBySex: PropTypes.arrayOf(PropTypes.string),
	searchUsersByAge: PropTypes.string,

	loadUsers: PropTypes.func.isRequired,
	searchUsersByFirstNameChange: PropTypes.func.isRequired,
	searchUsersByLastNameChange: PropTypes.func.isRequired,
	searchUsersByAgeChange: PropTypes.func.isRequired,
	searchUsersBySexChange: PropTypes.func.isRequired,
};

export default App;
