import fetch from 'isomorphic-fetch';
import constants from '../constants.js';
const apiURL = constants.APIURL;

export const API_RESPONSE = 'API_RESPONSE';
export const API_REQUEST = 'API_REQUEST';

function apiRequest(endPoint) {
    return {
        type: API_REQUEST,
        endPoint
    };
}

export function apiResponse(json, endPoint) {
    return {
        type: API_RESPONSE,
        endPoint,
        items: json,
        receivedAt: Date.now()
    };
}

export function apiFetch(endPoint) {
    return function (dispatch) {
        dispatch(apiRequest(endPoint));
        return fetch(apiURL + endPoint)
        .then(response => response.json())
        .then(json =>
              dispatch(apiResponse(json, endPoint))
             );
    };
}

export function apiFetchIfNeeded(endPoint){
    return (dispatch, getState) => {
        if (apiShouldFetch(getState(), endPoint)) {
            // Dispatch a thunk from thunk!
            return dispatch(apiFetch(endPoint));
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve();
        }
    };
}

function apiShouldFetch(state, endPoint) {
    const apiCall = state.apiCalls[endPoint];
    if (!apiCall) {
        return true;
    } else if (apiCall.isFetching) {
        return false;
    } else {
        return false;
    }
}

export const FILE_REQUEST  = 'FILE_REQUEST ';
function fileRequest(endPoint) {
    return {
        type: FILE_REQUEST ,
        endPoint
    };
}

export const FILE_RESPONSE = 'FILE_RESPONSE';
export function fileResponse(text, endPoint) {
    return {
        type: FILE_RESPONSE,
        endPoint,
        file: text,
        receivedAt: Date.now()
    };
}

export function fileFetch(endPoint) {
    return function (dispatch) {
        dispatch(fileRequest(endPoint));
        return fetch(endPoint)
        .then(response => response.text())
        .then(text =>
              dispatch(fileResponse(text, endPoint))
             );
    };
}

export function fileFetchIfNeeded(endPoint){
    return (dispatch, getState) => {
        if (fileShouldFetch(getState(), endPoint)) {
            return dispatch(fileFetch(endPoint));
        } else {
            return Promise.resolve();
        }
    };
}

function fileShouldFetch(state, endPoint) {
    const fileCall = state.fileCalls[endPoint];
    if (!fileCall) {
        return true;
    } else if (fileCall.isFetching) {
        return false;
    } else {
        return false;
    }
}
