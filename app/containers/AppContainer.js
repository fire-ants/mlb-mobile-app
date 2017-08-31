import React, {Component, PropTypes} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'
//import {StackNavigator} from 'react-navigation'

import {
    Animated,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigationExperimental,
    NavigationActions
} from 'react-native';
import Home from './Home'
import Start from './Start'
import Detail from './Detail'
import LHPitch from './LHPitch'
import RHPitch from './RHPitch'
import HVKey from './HVKey'
import Open from './Open'

//retry peckish redux navstyle
//NavigationExperiemental will be deprecated as of React Native 0.43
  const {
    PropTypes: NavigationPropTypes,
    StateUtils: NavigationStateUtils,
    Card: NavigationCard,
    Transitioner: NavigationTransitioner,
  } = NavigationExperimental;

  const {
    PagerStyleInterpolator: NavigationPagerStyleInterpolator,
  } = NavigationCard;
//peckish import 1 end

//REDUX NAV PECKISH BELOW
  class AppContainer extends Component {

  constructor(props: any, context: any) {
      super(props, context);
      this._render = this._render.bind(this);
      this._renderScene = this._renderScene.bind(this);
    }

    render() {
     return (
        <NavigationTransitioner
          navigationState={this.props.navigationState}
          render={this._render}
        />
      );
    }

    _render(transitionProps) {
      const scenes = transitionProps.scenes.map((scene) => {
        const sceneProps = {
          ...transitionProps,
          scene,
        };
        return this._renderScene(sceneProps);
      });

      return (
        <View style={ { flex: 1 } }>
          {scenes}
        </View>
      );
    }

    _renderScene(sceneProps) {
      return (
        <SceneContainer
          {...sceneProps}
          key={sceneProps.scene.key}
        />
      )
    }
  }

  class SceneContainer extends Component {

    render() {
      const style = [
        styles.scene,
        NavigationPagerStyleInterpolator.forHorizontal(this.props),
      ];
      let Scene = null;
      if (this.props.scene.route.key === 'Open') { Scene = Open }
      if (this.props.scene.route.key === 'Start') { Scene = Start }
      if (this.props.scene.route.key === 'Detail') { Scene = Detail }
      if (this.props.scene.route.key === 'LHPitch') { Scene =  LHPitch }
      if (this.props.scene.route.key === 'RHPitch') { Scene = RHPitch }
      if (this.props.scene.route.key === 'HVKey') { Scene = HVKey }

      return  (
        <Animated.View style={style}>
          <Scene {...this.props} style={style} />
        </Animated.View>
      )
    }
  }

  const styles = StyleSheet.create({
    scene: {
      flex: 1,
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
  });
//REDUX NAV PECKISH ABOVE


//WORKING WITHOUTH REDUX NAV BELOW
//-----------------------------------------------
// class AppContainer extends Component {
//     static navigationOptions = {
//       title: 'Hitters',
// };
//   render() {
//     return (<Start {...this.props} />);
//     }
//   }
//------------------------------------------------
//WORKING WITHOUT REDUX NAV ABOVE


// const SimpleNav = StackNavigator({
//     Start: { screen: Start },
//     Detail: { screen: Detail },
// });


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

//Old render for non-navigationState
//AppRegistry.registerComponent('SimpleNav', () => SimpleNav);
//export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer);
