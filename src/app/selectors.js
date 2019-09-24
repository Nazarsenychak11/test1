const slice = state => state.app;

export const selectUsers = state => slice(state).users;
export const selectLoading = state => slice(state).loading;
export const selectError = state => slice(state).error;



// export const selectFiltredUsers = state => {
//     const users = slice(state).users;
//     const searchString = String(slice(state).searchString).trim();
//
//     return users.filter(user => user.name.includes(searchString));
// };
