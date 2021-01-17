import { handleActions } from 'redux-actions'

import {
    loadStart,
    loadComplete,
    loadFail,
    addComplete,
    addFail,
    deleteComplete,
    deleteFail
} from 'actions/messages'

const initialState = {
    loading: false,
    entities: { '0': [] },
}


export default handleActions({
    [loadStart]: (state) => {
        return {
            ...state,
            loading: true,
        }
    },
    [loadComplete]: (state, action) => {
        let entities = {};
        Object.assign(entities, state.entities, action.payload);
        console.log('[MessagesReducer]: loadComplete', entities);
        return {
            loading: false,
            entities,
        }
    },
    [loadFail]: (state, action) => {
        return {
            loading: false,
            entities: [],
        }
    },
    [addComplete]: (state, action) => {
        let entities = {};
        Object.assign(entities, state.entities);
        const { payload } = action;
        entities[payload.chatId] = [payload.comment, ...entities[payload.chatId]];
        console.log('[MessagesReducer]: addComplete', entities);
        return {
            ...state,
            entities
        }
    },
    [addFail]: (state, action) => {
        return {
            ...state,
        }
    },
    [deleteComplete]: (state, action) => {
        let entities = [];
        Object.assign(entities, state.entities);
        const { payload } = action;
        // const entities = state.entities.reduce(
        //     (res, current) => {
        //         let skip = false;
        //         if (current.ticker === payload.ticker) {
        //             if (payload.quantity >= current.quantity) {
        //                 skip = true;
        //             }
        //         }
        //         if (!skip) { res.push(current) };
        //         return res;
        //     }, []);
        console.log('[MessagesReducer]: deleteComplete', entities);
        return {
            loading: false,
            entities,
        }
    },
    [deleteFail]: (state, action) => {
        return {
            ...state,
        }
    },
}, initialState)