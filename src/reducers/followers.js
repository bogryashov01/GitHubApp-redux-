import {GET_FOLLOWERS_SUCCESS,GET_FOLLOWERS_FAILED, GET_FOLLOWERS} from '../constants/index';
export const followersInitialState = {
    followers: [],
    errors: null,
    loading: false
};
function getFollowers(state = followersInitialState, action) {
    switch(action.type) {
        case GET_FOLLOWERS:{
            return{...state,}
        }
        case GET_FOLLOWERS_SUCCESS:{
            const { payload } = action;
            return {...state, followers: payload.data}
        }
        case GET_FOLLOWERS_FAILED:{
            return{...state}
        }
        default: {
            return state;
          }
    }
}
export default getFollowers;