import React from 'react';
import PropTypes from 'prop-types';

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

export default function UserItem({ user }) {
  const classes = useStyles();
  let sex = user.sex;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Grid item sm={3}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Card of user
            </Typography>
            <Typography variant="h5" component="h3">
              {user.name}
            </Typography>
            <Typography variant="h6" component="h5">
              {user.lastname}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              <span>Age: </span>
              {user.age}
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

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
  })
};
