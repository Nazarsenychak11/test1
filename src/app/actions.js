import { createAction } from '../utils/redux';
import {
    loadUsersRequest as loadUsersRequestType,
    loadUsersSuccess as loadUsersSuccessType,
    loadUsersFailure as loadUsersFailureType,
    searchUsersField as searchUsersFieldType
} from './actionTypes';

export const loadUsersRequest = createAction(loadUsersRequestType);
export const loadUsersSuccess = createAction(loadUsersSuccessType);
export const loadUsersFailure = createAction(loadUsersFailureType);
export const searchUsersField = createAction(searchUsersFieldType);
