import { combineReducers } from 'redux';
import { API_REQUEST, API_RESPONSE, FILE_REQUEST, FILE_RESPONSE, SET_NAME_FILTER, CLEAR_NAME_FILTER, SET_VISIBLE_ITEMS } from '../actions/actions';

function apiCalls(state = {}, action) {
    switch (action.type) {
        case API_RESPONSE:
            return Object.assign({}, state, {
                [action.endPoint]: items(state[action.endPoint], action)
            });
        default:
            return state;
    }
};

const items = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case API_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case API_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
};

function fileCalls(state = {}, action) {
    switch (action.type) {
        case FILE_RESPONSE:
            return Object.assign({}, state, {
                [action.endPoint]: file(state[action.endPoint], action)
            });
        default:
            return state;
    }
};

const file = (state = {
    isFetching: false,
    file: ''
}, action) => {
    switch (action.type) {
        case FILE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FILE_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                file: action.file,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
};

const nameFilter = (state = {
    filter: ''
}, action) => {
    switch (action.type) {
        case SET_NAME_FILTER:
            return {
                filter: action.filter
            };
        default:
            return state;
    }
};

const visibleItems = (state = [], action) => {
    switch (action.type){
        case SET_VISIBLE_ITEMS:
            return action.items;
            break;
        default:
            return state;
            break;
    }
};


const horchataApp = combineReducers({
    apiCalls,
    fileCalls,
    nameFilter,
    visibleItems
});

export default horchataApp;
