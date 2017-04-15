//import { View, TabBarIOS, TabBarItemIOS } from 'react-native';
import {View, Text} from 'react-native';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import { ActionCreators } from '../../actions';
import Home from '../Home';
import Start from '../Start';
import About from '../About';
import TabNavigator from 'react-native-tab-navigator';

class ApplicationTabs extends Component {

  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  onPress(index) {
    this.props.setTab(index);
  }

  renderScene(component) {
    return (
      <View style={ { flex: 1 } }>
        { React.createElement(component, this.props) }
      </View>
    );
  }

 render () {
   return (<TabNavigator>{ this.renderScene(Start) }</TabNavigator>);
 }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
