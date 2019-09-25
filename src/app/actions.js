import { createAction } from '../utils/redux';
import {
    loadUsersRequest as loadUsersRequestType,
    loadUsersSuccess as loadUsersSuccessType,
    loadUsersFailure as loadUsersFailureType,

    searchUsersByFirstNameChange as searchUsersByFirstNameChangeType,
    searchUsersByLastNameChange as searchUsersByLastNameChangeType,
    searchUsersBySexChange as searchUsersBySexChangeType,
    searchUsersByAgeChange as searchUsersByAgeChangeType,
} from './actionTypes';

export const loadUsers = createAction(loadUsersRequestType);
export const loadUsersSuccess = createAction(loadUsersSuccessType);
export const loadUsersFailure = createAction(loadUsersFailureType);

export const searchUsersByFirstNameChange = createAction(searchUsersByFirstNameChangeType);
export const searchUsersByLastNameChange = createAction(searchUsersByLastNameChangeType);
export const searchUsersBySexChange = createAction(searchUsersBySexChangeType);
export const searchUsersByAgeChange = createAction(searchUsersByAgeChangeType);
