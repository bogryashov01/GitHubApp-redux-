import {GET_REPOS_SUCCESS,GET_REPOS_FAILED, GET_REPOS} from '../constants/index';
export const reposInitialState = {
    repositories: [],
    errors: null,
    loading: false
};
function getReposInfo(state = reposInitialState, action) {
    switch(action.type) {
        case GET_REPOS:{
            return{...state,}
        }
        case GET_REPOS_SUCCESS:{
            const { payload } = action;
            debugger
            return {...state, repositories: payload.data}
        }
        case GET_REPOS_FAILED:{
            return{...state}
        }
        default: {
            return state;
          }
    }
}
export default getReposInfo;