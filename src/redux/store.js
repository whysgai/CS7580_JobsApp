import { createStore } from "redux";
import _ from "lodash";
import {INITIAL_STATE, LOGIN_STATE} from "./storeConstants";
import { LOGIN_SUCCESS, INVALID_LOGIN, LOGOUT_SUCCESS,
    READ_JOBS, SAVE_JOB, SORT_JOBS, UPDATE_ONBOARDING } from './actionConstants';

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
            case LOGOUT_SUCCESS:
                return INITIAL_STATE;
            case UPDATE_ONBOARDING:
                return {
                    ...state,
                    user: {
                        ...state.user,
                        onboarding: {
                            ...state.user.onboarding,
                            [action.payload.onboarding]: action.payload.value
                        }                        
                    }
                }
            case READ_JOBS:
                return {
                    ...state,
                    jobs: action.payload.jobs
                }  
            case SAVE_JOB:
                for (let save of state.user.saved) {console.log(save)};
                if (action.payload.saved) {                    
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            saved: state.user.saved.filter(job => job !== action.payload.job)                
                        },
                        jobs : state.jobs.map(job => {
                            if (action.payload.job === job.id) {
                                job.saves -= 1;
                            }
                            return job;
                    })
                    }
                } else {
                    let a = state.user.saved;
                    a.push(action.payload.job);
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            saved : a
                        },
                        jobs : state.jobs.map(job => {
                                if (action.payload.job === job.id) {
                                    job.saves += 1;
                                }
                                return job;
                        })
                    };
                }
            case SORT_JOBS:
                if (state.jobs.length > 0) {
                    let sorted = state.jobs.sort(
                        (job1, job2) => job2.saves - job1.saves
                    );
                    let deepSorted = [];
                    for (let job of sorted) {
                        deepSorted.push(job);
                    };
                    return {
                        ...state,
                        jobs: deepSorted
                    };
                }                     
            default:
                return state;
        }
    };

    export default createStore(rootReducer);