import {combineReducers} from 'redux';
import app from './app';
import getUserInfo from './user';
import getReposInfo from './repos';
import getFollowers from './followers';
const rootReducer = combineReducers({
    getUserInfo,getReposInfo,getFollowers,
    app,
});
export default rootReducer;