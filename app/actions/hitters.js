import * as types from './types'
import Api from '../lib/api'

export function fetchHitters(name) {
  return (dispatch, getState) => {
    const params = [
      `limit=10000`,
    //  `name=${encodeURIComponent(name)}`,
    ].join('&');

    return Api.get(`/player/?${params}`).then(resp => {
      dispatch(setSearchedHitters({hitters: resp}));
    }).catch( (ex) => {
      console.log(ex);
    })
  }
}

export function fetchHitter(mlbid) {
    return (dispatch, getState) => {;
        return Api.get(`/player/mlbid/${mlbid}`).then(resp => {
            dispatch(setSearchedHitter({hitter: resp}));
        }).catch( (ex) => {
            console.log(ex);
        })
    }
}

export function setSearchedHitters({hitters}){
  return {
    type: types.SET_SEARCHED_HITTERS,
      hitters
  }
}

export function setSearchedHitter({hitter}){
  return {
    type: types.SET_SEARCHED_HITTER,
      hitter
  }
}

export function addHitter() {
  return {
    type: types.ADD_HITTER,
  }
}
