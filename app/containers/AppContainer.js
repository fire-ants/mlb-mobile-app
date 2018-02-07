import React, {Component, PropTypes} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'
//import {StackNavigator} from 'react-navigation'

import {
    Animated,
    AppRegistry,
    StatusBar,
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
import Open from './Open'
import FireAnts from './FireAnts'
import HVKey from './HVKey'


  const {
    PropTypes: NavigationPropTypes,
    StateUtils: NavigationStateUtils,
    Card: NavigationCard,
    Transitioner: NavigationTransitioner,
  } = NavigationExperimental;

  const {
    PagerStyleInterpolator: NavigationPagerStyleInterpolator,
  } = NavigationCard;

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
          <StatusBar hidden={true} />
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
      if (this.props.scene.route.key === 'HVKey') { Scene = HVKey }
      if (this.props.scene.route.key === 'FireAnts') { Scene = FireAnts }
      if (this.props.scene.route.key === 'LHPitch') { Scene =  LHPitch }
      if (this.props.scene.route.key === 'RHPitch') { Scene = RHPitch }

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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
