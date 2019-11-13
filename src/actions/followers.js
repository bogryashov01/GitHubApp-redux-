import {
    GET_FOLLOWERS,
    GET_FOLLOWERS_SUCCESS,
    GET_FOLLOWERS_FAILED
} from '../constants';
import { setLoading } from './app';
import {getFollowersFromGitHub} from '../api/user'

export const getFollowers = () => ({
    type: GET_FOLLOWERS
})

export const getFollowersSuccess = (followersData) => ({
    type: GET_FOLLOWERS_SUCCESS,
    payload: followersData
})

export const getFollowersFailed = (e) => ({
    type: GET_FOLLOWERS_FAILED,
    payload: e
})

export const getFollowersActionCreator = (username) => {
    return async dispatch => {  
        dispatch(getFollowers());
        dispatch(setLoading());
        getFollowersFromGitHub(username).then((res) => {
        dispatch(getFollowersSuccess(res))
        dispatch(setLoading())
    }).catch((e) => {
        dispatch(getFollowersFailed(e));
        dispatch(setLoading())
    });
}
} 