import { combineReducers } from 'redux';

import chatReducer from './chats'
import messageReducer from './messages'
import userReducer from './user'

export default combineReducers({
    chats: chatReducer,
    messages: messageReducer,
    user: userReducer,
})