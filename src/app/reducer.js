import {
    loadUsersRequest,
    loadUsersSuccess,
    loadUsersFailure,

    searchUsersByFirstNameChange,
    searchUsersByLastNameChange,
    searchUsersByAgeChange,
    searchUsersBySexChange
} from './actionTypes';

const initialState = {
    users: [],
    loading: true,
    error: null,
    searchUsersByFirstName: '',
    searchUsersByLastName: '',
    searchUsersBySex: ['m', 'f'],
    searchUsersByAge: '',
};

export default function reducer(state = initialState, { type, payload }) {
    switch(type) {
        case loadUsersRequest:
            return {
                ...state,
                loading: true,
                error: null
            };
        case loadUsersSuccess:
            return {
                ...state,
                loading: false,
                users: payload
            };
        case loadUsersFailure:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case searchUsersByFirstNameChange:
            return {
                ...state,
                searchUsersByFirstName: payload
            };
        case searchUsersByLastNameChange:
            return {
                ...state,
                searchUsersByLastName: payload
            };
        case searchUsersByAgeChange:
            return {
                ...state,
                searchUsersByAge: payload
            };
        case searchUsersBySexChange:
            return {
                ...state,
                searchUsersBySex: payload
            };
        default:
            return state;
    }
}
