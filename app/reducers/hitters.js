import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedHitters = createReducer({}, {
    [types.SET_SEARCHED_HITTERS](state, action) {
        let newState = {};
        action.hitters.forEach((hitter) => {
           //newState[hitter.mlbid] = hitter
                 //Sample Data Display in View
                 let id = hitter.mlbid
                 //Our Data Display in View
                 //let id = hitter.mlbid
                 newState[id] = Object.assign({}, hitter, { id });
        });
        return newState;
    }
});

export const hitterCount = createReducer(0, {
    [types.SET_SEARCHED_HITTERS](state, action){
        return action.hitters.length;
    }
});