import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { getUserId } from '../../../utils/helpers';

import UserItem from '../UserItem';

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

const UsersList = ({ users }) => {
  const classes = useStyles();

  function renderUserItems() {
    return users.map((user) => (
      <UserItem key={getUserId(user)} user={user} />
    ));
  }

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={4}>
          {renderUserItems()}
        </Grid>
      </div>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersList;
