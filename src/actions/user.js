import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILED
} from '../constants';
import { getUserFromGitHub } from '../api/user';
import { setLoading } from './app';

export const getUser = ({
    type: GET_USER
})

export const getUserSuccess = (userData) => ({
    type: GET_USER_SUCCESS,
    payload: userData
})

export const getUserFailed = (e) => ({
    type: GET_USER_FAILED,
    payload: e
})

export const getUserActionCreator = (username) => {
    return async dispatch => {
        dispatch(getUser);
        dispatch(setLoading());
        getUserFromGitHub(username).then((res) => {
            dispatch(getUserSuccess(res.data))
            dispatch(setLoading());
        }).catch((e) => {
            dispatch(getUserFailed(e));
            dispatch(setLoading());
        });

        // try{
        //     dispatch(getUserSuccess(userData))
        // }
        // catch (e) {
        //     debugger
        //     dispatch(getUserFailed(e))
        // }
    }
}   