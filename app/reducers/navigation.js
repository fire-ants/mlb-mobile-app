import ReactNative from 'react-native';
const { NavigationExperimental, StatusBar} = ReactNative;
import * as types from '../actions/types'
import createReducer from '../lib/createReducer'
//import ApplicationTabs from '../containers/ApplicationTabs'
import Detail from '../containers/Detail'
import Start from '../containers/Start'

const {
 CardStack: NavigationCardStack,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

const allTabs = [
  (lastRoute) => lastRoute || Object.assign({ key: 'LHPitch', index: 6 }),
  (lastRoute) => lastRoute || Object.assign({ key: 'RHPitch', index: 7 }),

  //(lastRoute) => lastRoute || Object.assign({ key: 'home', index: 2}),
];

export const tabs = createReducer({ index: 0, key: 'home', routes: allTabs }, {
  [types.SET_TAB](state, action) {
    return Object.assign({}, state,  allTabs[action.index]());
  }
});

export const navigationState = createReducer({ index: 0,
    routes: [
      { key: 'Start', },
      { key: 'Detail', },
      { key: 'LHPitch', },
      { key: 'RHPitch' },
      { key: 'HVKey'}
      //{ key: 'Detail' },
    ]
  }, {

  [types.NAVIGATION_FORWARD](state, action) {
    return NavigationStateUtils.forward(state);
  },

  [types.NAVIGATION_BACK](state, action) {
    return NavigationStateUtils.back(state);
  },

});

export const navigationParams = createReducer({ }, {
  [types.NAVIGATION_FORWARD](state, action) {
    return action.state;
  },

});
