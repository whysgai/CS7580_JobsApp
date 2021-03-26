import { LOGIN_SUCCESS, INVALID_LOGIN, LOGOUT_SUCCESS,
    READ_JOBS, SAVE_JOB, SORT_JOBS, UPDATE_ONBOARDING } from './actionConstants';
import { login, getJobs, saveJob, unsaveJob, getSavedJobs, updateOnboarding } from "../data/data";
import store from "./store"

export const userLogin = (username, password) => {
    let user = login(username, password);
    console.log("Action login", user);
    if (user.id)
        return loginSuccess(user);
    else return loginFail();
};

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: {
        user
    }
});

export const loginFail = () => ({
    type: INVALID_LOGIN
});

export const logout = () => ({
    type: LOGOUT_SUCCESS
});

export const setOnboarding = (onboarding, value) => {
    const id = store.getState().user.id;
    updateOnboarding(id, onboarding, value);
    return {
        type: UPDATE_ONBOARDING,
        payload: {
            onboarding,
            value
        }        
    }
};

export const readJobs = (languages) => {
    let jobs = [];
    if (languages !== null) {
        jobs = getJobs(languages);        
    } else {
        const userId = store.getState().user.id;
        jobs = getSavedJobs(userId);
    }
    return {
        type: READ_JOBS,
        payload: {
            jobs
        }
    }
};

export const toggleSaved = (saved, jobId) => {
    const userId = store.getState().user.id;
    if (saved) {
        unsaveJob(userId, jobId);
    } else {
        saveJob(userId, jobId);
    }
    return {
        type: SAVE_JOB,
        payload: {
            saved,
            job : jobId
        }
    }   
    
};

export const sortBySaves = () => {
    return {
        type: SORT_JOBS
    }
};