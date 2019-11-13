import {
    GET_REPOS,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAILED
} from '../constants';
import { setLoading } from './app';
import {getReposFromGitHub} from '../api/user'

export const getRepos = () => ({
    type: GET_REPOS
})

export const getUserSuccess = (reposData) => ({
    type: GET_REPOS_SUCCESS,
    payload: reposData
})

export const getUserFailed = (e) => ({
    type: GET_REPOS_FAILED,
    payload: e
})

export const getReposActionCreator = (username) => {
    return async dispatch => {  
        dispatch(getRepos());
        dispatch(setLoading());
        getReposFromGitHub(username).then((res) => {
        dispatch(getUserSuccess(res))
        dispatch(setLoading())
    }).catch((e) => {
        dispatch(getUserFailed(e));
        dispatch(setLoading())
    });
}
} 