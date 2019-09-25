const slice = state => state.app;

export const selectUsers = state => slice(state).users;
export const selectLoading = state => slice(state).loading;
export const selectError = state => slice(state).error;

export const selectSearchUsersByFirstName = state => slice(state).searchUsersByFirstName;
export const selectSearchUsersByLastName = state => slice(state).searchUsersByLastName;
export const selectSearchUsersByAge = state => slice(state).searchUsersByAge;
export const selectSearchUsersBySex = state => slice(state).searchUsersBySex;

export const selectFilteredUsers = state => {
    const users = selectUsers(state);

    if (users.length === 0) {
        return users;
    }

    const searchUsersByFirstName = String(selectSearchUsersByFirstName(state)).trim();
    const searchUsersByLastName = String(selectSearchUsersByLastName(state)).trim();
    const searchUsersByAge = selectSearchUsersByAge(state);
    const searchUsersBySex = selectSearchUsersBySex(state);

    return users.filter(user => {
        if (!searchUsersByFirstName &&
          !searchUsersByLastName &&
          !searchUsersByAge &&
          (searchUsersBySex.includes('m') && searchUsersBySex.includes('f'))) {
            return user;
        }

        return (searchUsersByFirstName &&
          user.name.toLowerCase().includes(searchUsersByFirstName.toLowerCase())) ||

          (searchUsersByLastName &&
            user.lastname.toLowerCase().includes(searchUsersByLastName.toLowerCase())) ||

          (!(searchUsersBySex.includes('m') && searchUsersBySex.includes('f')) &&
            searchUsersBySex.includes(user.sex)) ||

          (searchUsersByAge && (
            user.age === +searchUsersByAge
          ));
    });
};
