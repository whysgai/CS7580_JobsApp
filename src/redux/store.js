import {bindActionCreators, createStore} from "redux";
import {INITIAL_STATE, LOGIN_STATE} from "./storeConstants";
import { LOGIN_SUCCESS, INVALID_LOGIN, LOGIN_NETWORK_ERROR, LOGOUT_SUCCESS,
    READ_JOBS, SAVE_JOB, READ_SAVED_JOBS, SORT_JOBS, UPDATE_ONBOARDING } from './actionConstants';

    const rootReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    loginState: LOGIN_STATE.LOGGED_IN,
                    user: action.payload.user
                };
            case INVALID_LOGIN:
                return {...state, loginState: LOGIN_STATE.INVALID_LOGIN};
            case UPDATE_ONBOARDING:
                let currentBool = state.user.onboarding[action.payload.onboarding];
                console.log("Update onboarding", action.payload.onboarding, "from", currentBool);                
                return {
                    ...state,
                    user: {
                        ...state.user,
                        onboarding: {
                            ...state.user.onboarding,
                            // [action.payload.onboarding]: !currentBool
                            [action.payload.onboarding]: true
                        }                        
                    }
                }   
            default:
                return state;
        }
    };

    export default createStore(rootReducer);