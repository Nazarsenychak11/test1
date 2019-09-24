import {
    loadUsersRequest,
    loadUsersSuccess,
    loadUsersFailure,
    searchUsersField
} from './actionTypes';

const initialState = {
    users: [],
    loading: true,
    error: null,
    searchUsers: ''
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
        case searchUsersField: 
            return {
                ...state,
                searchUsers: payload
            }
        default:
            return state;
    }
}
