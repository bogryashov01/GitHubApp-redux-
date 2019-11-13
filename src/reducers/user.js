import {GET_USER_SUCCESS,GET_USER_FAILED, GET_USER} from '../constants/index';
export const userInitialState = {
    loading: false,
    data: {}
};
function getUserInfo(state = userInitialState, action) {
    switch(action.type) {
        case GET_USER:{
            return{...state, loading: true}
        }
        case GET_USER_SUCCESS:{
            return {...state, data: action.payload, loading: false}
        }
        case GET_USER_FAILED:{
            return{...state,loading: false}
        }
        default: {
            return state;
          }
    }
}
export default getUserInfo;