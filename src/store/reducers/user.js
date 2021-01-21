import { handleActions } from 'redux-actions'

import {
    loginStart,
    loginComplete,
    loginFail,
    addStart,
    addComplete,
    addFail,
    updateStart,
    updateComplete,
    updateFail,
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
            user: action.payload,
        }
    },
    [loginFail]: (state, action) => {
        return {
            ...initialState
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
    [updateStart]: (state) => {
        return {
            ...state,
            loading: true,
        }
    },
    [updateComplete]: (state, action) => {
        return {
            ...state,
            user: {
                id: state.user.id,
                nick: action.payload.nick,
                login: state.user.login,
            },
        }
    },
    [updateFail]: (state, action) => {
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