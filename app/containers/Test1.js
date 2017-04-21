import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { appStyle } from '../styles';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from '../_global/scrollableTabView/DefaultTabBar';

import Test3 from './Test3'
import Test4 from './Test4'
import LHPitch from './LHPitch'
import RHPitch from './RHPitch'

import styles from './styles/Hitter';

//import Tabs from 'react-native-tabs';




class Test1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      test3TabHeight: null,
      test4TabHeight: null,
      index: 0,
      tab: 0
    };

    this._getTabHeight = this._getTabHeight.bind(this);
		this._onChangeTab = this._onChangeTab.bind(this);
  }

  renderScene(component) {
    return (
      <View>
        { React.createElement(component, this.props) }
      </View>
    );
  }

  _onChangeTab({ i, ref }) {
  this.setState({ tab: i });
  }

  _onContentSizeChange(width, height) {
		if (this.state.tab === 0 && this.state.test4TabHeight === this.state.test3TabHeight) {
			this.setState({ test4TabHeight: height });
		}
	}

  _getTabHeight(tabName, height) {
  if (tabName === 'test3') this.setState({ test3TabHeight: height });
  if (tabName === 'test4') this.setState({ test4TabHeight: height });
}

  render () {
    const self = this;
    const {details} = this.props;
    const info = details;

    let height;
    if (this.state.tab === 0) height = this.state.test3TabHeight;
    if (this.state.tab === 1) height = this.state.test4TabHeight;

    console.log (this.props)
    return (
      <View style={styles.contentContainer}>
        <ScrollableTabView
          onChangeTab={this._onChangeTab}
          renderTabBar={() => (
            <DefaultTabBar
              textStyle={styles.textStyle}
              underlineStyle={styles.underlineStyle}
              style={styles.tabBar}
            />
          )}>
          <Test3 tabLabel="TEST 3" info={info} />
          <Test4 tabLabel="TEST 4" info={info} getTabHeight={this._getTabHeight} />
          <LHPitch tabLabel="LH Pitch" info={info} />
          <RHPitch tabLabel="RH Pitch" info={info} getTabHeight={this._getTabHeight} />
        </ScrollableTabView>
      </View>
    )
  }
}




function mapStateToProps(state) {
  return {
    searchedHitters: state.searchedHitters,
    navigationParams: state.navigationParams,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Test1);
