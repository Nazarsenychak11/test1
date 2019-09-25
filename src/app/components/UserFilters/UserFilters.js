import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		marginBottom: 50,
		marginTop: 50
	},
	inputBlock: {
		marginLeft: 10,
		marginRight: 10
	},
	input: {
		height: 40,
		borderRadius: 6,
    border: 0,
    fontSize: 16,
    outline: 0,
	}
	
}));

const UserFilters = ({
	searchUsersByFirstName,
	searchUsersByLastName,
	searchUsersBySex,
	searchUsersByAge,

	onChangeFirstNameFilter,
	onChangeLastNameFilter,
	onChangeAgeFilter,
	onChangeSexFilter
}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.inputBlock}>
				<input
					className={classes.input}
					onChange={onChangeFirstNameFilter}
					value={searchUsersByFirstName}
					placeholder="Имя..."
				/>
			</div>
			<div className={classes.inputBlock}>
				<input
					className={classes.input}
					onChange={onChangeLastNameFilter}
					value={searchUsersByLastName}
					placeholder="Фамилия..."
				/>
			</div>
			<div className={classes.inputBlock}>
				<input
					className={classes.input}
					onChange={onChangeAgeFilter}
					value={searchUsersByAge}
					placeholder="Возраст..."
				/>
			</div>
			<div className={classes.inputBlock}>
				<label>
					Женщина:
					<input
						className={classes.check}
						type="checkbox"
						checked={searchUsersBySex.includes('f')}
						onChange={() => onChangeSexFilter('f')}
					/>
				</label>
			</div>
			<div className={classes.inputBlock}>
				<label>
					Мужчина:
					<input
						className={classes.check}
						type="checkbox"
						checked={searchUsersBySex.includes('m')}
						onChange={() => onChangeSexFilter('m')}
					/>
				</label>
			</div>
		</div>
	);
};

UserFilters.propTypes = {
	searchUsersByFirstName: PropTypes.string,
	searchUsersByLastName: PropTypes.string,
	searchUsersBySex: PropTypes.arrayOf(PropTypes.string),
	searchUsersByAge: PropTypes.string,

	onChangeFirstNameFilter: PropTypes.func.isRequired,
	onChangeLastNameFilter: PropTypes.func.isRequired,
	onChangeAgeFilter: PropTypes.func.isRequired,
	onChangeSexFilter: PropTypes.func.isRequired
};

export default UserFilters;
