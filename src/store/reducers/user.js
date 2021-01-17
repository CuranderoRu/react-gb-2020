import { handleActions } from 'redux-actions'

import {
    loginStart,
    loginComplete,
    loginFail,
    addStart,
    addComplete,
    addFail,
    deleteComplete,
    deleteFail
} from 'actions/user'

const initialState = {
    loading: false,
    user: {
        id: null,
        nick: null,
        login: null,
    },
}


export default handleActions({
    [loginStart]: (state) => {
        return {
            ...state,
            loading: true,
        }
    },
    [loginComplete]: (state, action) => {
        console.log('[UserReducer]: loginComplete', action.payload);
        return {
            loading: false,
            entities: action.payload,
        }
    },
    [loginFail]: (state, action) => {
        return {
            loading: false,
            entities: [],
        }
    },
    [addStart]: (state) => {
        return {
            ...state,
            loading: true,
        }
    },
    [addComplete]: (state, action) => {
        console.log('[UserReducer]: addComplete', action.payload);
        return {
            ...state,
            user: action.payload
        }
    },
    [addFail]: (state, action) => {
        return {
            ...state,
        }
    },
    [deleteComplete]: (state, action) => {
        console.log('[UserReducer]: deleteComplete');
        return {
            ...initialState
        }
    },
    [deleteFail]: (state, action) => {
        return {
            ...state,
        }
    },
}, initialState)