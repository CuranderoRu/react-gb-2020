import { createAction } from 'redux-actions';
import {
    APP_URL,
    USER_API,
    USER_LOGIN_START,
    USER_LOGIN_COMPLETE,
    USER_LOGIN_FAIL,
    USER_ADD_START,
    USER_ADD_COMPLETE,
    USER_ADD_FAIL,
    USER_DELETE_COMPLETE,
    USER_DELETE_FAIL
} from '../../constants'

import { loadMessages } from 'actions/messages';
import { loadChats } from 'actions/chats';



export const userLogin = (dispatch, item) => {
    dispatch(loginStart(item));
    // fetch(`${APP_URL}${USER_API}`)
    //     .then((res) => res.json())
    //     .then(
    //         (res) => {
    //             dispatch(addComplete(item));
    //         },
    //         () => {
    //             dispatch(addFail());
    //         }
    //     )
    dispatch(loginComplete(item));
};

export const newUser = (dispatch, item) => {
    dispatch(addStart(item));
    // fetch(`${APP_URL}${USER_API}`)
    //     .then((res) => res.json())
    //     .then(
    //         (res) => {
    //             dispatch(addComplete(item));
    //         },
    //         () => {
    //             dispatch(addFail());
    //         }
    //     )
    dispatch(addComplete(item));
};

export const deleteMessageItem = (dispatch, item) => {
    dispatch(deleteComplete(item));
};

export const loginStart = createAction(USER_LOGIN_START);
export const loginComplete = createAction(USER_LOGIN_COMPLETE);
export const loginFail = createAction(USER_LOGIN_FAIL);
export const addStart = createAction(USER_ADD_START);
export const addComplete = createAction(USER_ADD_COMPLETE);
export const addFail = createAction(USER_ADD_FAIL);
export const deleteComplete = createAction(USER_DELETE_COMPLETE);
export const deleteFail = createAction(USER_DELETE_FAIL);