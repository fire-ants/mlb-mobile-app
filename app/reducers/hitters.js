import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedHitters = createReducer({}, {
    [types.SET_SEARCHED_HITTERS](state, action) {
        let newState = {};
        action.hitters.forEach((hitter) => {
          let id = hitter.mlbid;
          newState[id] = Object.assign({}, hitter, { id });
        });
        return newState;
    }
});

export const searchedHitter = createReducer({}, {
  [types.SET_SEARCHED_HITTER](state, action) {
    let newState = {};
    let id = action.hitter.mlbid;

    newState[action.hitter.mlbid] = Object.assign({}, action.hitter, { id });
    return newState;
  }
});

export const hitterCount = createReducer(0, {
    [types.SET_SEARCHED_HITTERS](state, action){
        return action.hitters.length;
    }
});
