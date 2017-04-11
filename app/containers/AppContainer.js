import React, {Component} from 'react'
//import ReactNative from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'


import {
    Animated,
    StyleSheet,
    View,
    NavigationExperimental
} from 'react-native';
//import ApplicationTabs from './ApplicationTabs'
import Home from './Home'
import Detail from './Detail'
import Start from './Start'

//BEGIN NEW RENDER METHODS
/*const styles = StyleSheet.create({
  scene: {
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);*/

//BEGIN OLD RENDER METHODS
const {
    Card: NavigationCard,
    Transitioner: NavigationTransitioner,
} = NavigationExperimental;

const {
  PagerStyleInterpolator: NavigationPagerStyleInterpolator
} = NavigationCard;

//New Application Render
/*class AppContainer extends Component {
  render() {
    console.log(this.props)
    return <NavigationTransitioner
        navigationState={this.props.navigationState}
        render={this._render}
        />
  }
      _render() {
      return <ApplicationTabs {...this.props} />
  }
}*/

//Old Application Render - No Details Jump
class AppContainer extends Component {
        render () {
            //return <ApplicationTabs {...this.props} />
            //need Android Equivalent for above
            return <Start {...this.props} />
        }
}

function mapStateToProps(state) {
   return {
        navigationState: state.navigationState
  };
}

//imports this.props methods
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

//New render with navigationState
//export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

//Old render for non-navigationState
export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer);