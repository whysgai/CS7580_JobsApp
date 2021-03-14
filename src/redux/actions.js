import { LOGIN_SUCCESS, INVALID_LOGIN, LOGIN_NETWORK_ERROR, LOGOUT_SUCCESS,
    READ_JOBS, SAVE_JOB, READ_SAVED_JOBS, SORT_JOBS, UPDATE_ONBOARDING } from './actionConstants';
import { login, getJobs, getSavedJobs, updateOnboarding } from "../data/data";
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