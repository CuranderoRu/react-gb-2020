import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import chatReducer from './chats'
import messageReducer from './messages'
import userReducer from './user'

export default (history) => combineReducers({
    router: connectRouter(history),
    chats: chatReducer,
    messages: messageReducer,
    user: userReducer,
})