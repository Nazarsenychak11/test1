import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UsersItem from './UsersItem/index';
import UsersFilter from './UsersFilter/index';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

const ShowUsersList = (props) => {
	console.log(props.users);
	const classes = useStyles();
	let userCardElement = props.users.map((item) => (
		<UsersItem name={item.name} lastname={item.lastname} age={item.age} sex={item.sex} />
    ));

	console.log(props);
	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<UsersFilter searchUsers={props.searchUsers}/>
					</Grid>
				</Grid>
			</div>

			<div className={classes.root}>
                <Grid container spacing={4}>
					{userCardElement}
				</Grid>
			</div>
		</div>
	);
};

export default ShowUsersList;
