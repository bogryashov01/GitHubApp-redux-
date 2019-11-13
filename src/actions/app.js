import actionCreator from 'action-creator-redux';
import { SET_BURGER} from '../constants/index';

// export const setLoader = actionCreator(SET_LOADER);
export const setBurger = actionCreator(SET_BURGER);

export const setLoading = () => ({
    type: 'LOADING'
})