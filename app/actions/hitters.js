import * as types from './types'
import Api from '../lib/api'

export function fetchHitters(mlbid) {
    return (dispatch, getState) => {
        const params = [
        //`i=${encodeURIComponent(mlbid)}`,
        `mlbid=${encodeURIComponent(mlbid)}`,
        //'p=1'
        //'mlbid=543302'
        ].join('&');
        return Api.get(`/player/?${params}`).then(resp => {
        //return Api.get(`/api/?${params}`).then(resp => {
            dispatch(setSearchedHitters({hitters: resp}));
            console.log("here"+resp);
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

export function addHitter() {
    return {
        type: types.ADD_HITTER,
    }
}