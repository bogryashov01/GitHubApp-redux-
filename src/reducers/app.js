import {SET_BURGER} from '../constants/index'
 export const burgerInitialState = {
    isOpen: false,
    loadin: false,
}
export function setBurger (state=burgerInitialState, action){
    switch(action.type){
        case SET_BURGER:{
            return {...state , isOpen: false}
        }
        case 'LOADING': {
            return {...state, loading: !state.loading}
        }
        default:{
            return state;
        }
    }
}
export default setBurger;