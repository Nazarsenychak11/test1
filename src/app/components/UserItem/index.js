import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		margin: 15
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 10
	},
	pos: {
		marginBottom: 10
	}
});

export default function UsersItem(props) {
    const classes = useStyles();
    let sex = props.sex;

	return (
		<div>
			<Card className={classes.card}>
				<CardContent>
					<Grid item sm={3}>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Card of user
						</Typography>
						<Typography variant="h6" component="h3">
							{props.name}
						</Typography>
						<Typography variant="h6" component="h5">
							{props.lastname}
						</Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        <span>Age: </span> 
							{props.age}
						</Typography>
                        <Typography variant="body2" component="p">
                            <span>Sex: </span> 
                            {sex}
						</Typography>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
}
