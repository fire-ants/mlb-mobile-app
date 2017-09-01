import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { appStyle } from '../styles';
import {
  View,
  Image,
  RefreshControl,
  ScrollView,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from '../_global/scrollableTabView/DefaultTabBar';

import LHPitch from './LHPitch'
import RHPitch from './RHPitch'
import styles from './styles/Hitter';

class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lhpitchTabHeight: null,
      rhpitchTabHeight: null,
      index: 1,
      tab: 1
    };

    this._getTabHeight = this._getTabHeight.bind(this);
    this._onChangeTab = this._onChangeTab.bind(this);
    this._onContentSizeChange = this._onContentSizeChange.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this._onScroll = this._onScroll.bind(this);
  }

  hitter() {
    return this.props.searchedHitters[this.props.navigationParams.id] || null;
  }

  _onRefresh() {
  	this.setState({ isRefreshing: true });
  	this._retrieveDetails('isRefreshed');
  }

  _onScroll(event) {
  	const contentOffsetY = event.nativeEvent.contentOffset.y.toFixed();
  	if (contentOffsetY > 150) {
  		this._toggleNavbar('hidden');
  	} else {
  		this._toggleNavbar('shown');
  	}
  }

  _toggleNavbar(status) {
  	this.props.navigator.toggleNavBar({
  		to: status,
  		animated: true
  	});
  }

  _onChangeTab({ i, ref }) {
    this.setState({ tab: i });
  }

  _onContentSizeChange(width, height) {
		if (this.state.tab === 0 && this.state.lhpitchTabHeight === this.state.rhpitchTabHeight) {
			this.setState({ lhpitchTabHeight: height });
		}
	}

  _getTabHeight(tabName, height) {
    if (tabName === 'lhpitch') this.setState({ lhpitchTabHeight: height });
    if (tabName === 'rhpitch') this.setState({ rhpitchTabHeight: height });
  }

  _onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'close') {
        this.props.navigator.dismissModal();
      }
    }
  }

  render() {
    const {details} = this.props;
    const info = details;

    let height;
    if (this.state.tab === 0) height = this.state.lhpitchTabHeight;
    if (this.state.tab === 1) height = this.state.rhpitchTabHeight;

    const hitter = this.hitter();
    if (!hitter) { return null }

    return (
      <ScrollView
        style={styles.container}
        scrollEventThrottle={100}
        onContentSizeChange={this._onContentSizeChange}
      >
        <View style={{ height }}>
          <TouchableHighlight style={ { paddingVertical: 10, paddingHorizontal:10, backgroundColor: '#ff8101' } } onPress={ () => { this.props.navigateBack() } }>
            < Text style={{ color: '#fff'}}>
              <Image source={require('../images/backbutton.png')} style={styles.info} />
              Return to Hitters List
            </Text>
          </TouchableHighlight>
          <View style={styles.detailBox}>
            <View style={styles.detailb1}>
              <Image source={ { uri: 'http://mlb.mlb.com/mlb/images/players/head_shot/'+hitter.mlbid+'.jpg' } } style={appStyle.resultImage} />
              <Text style={appStyle.resultText} >{hitter.firstName} {hitter.lastName} | {hitter.position} </Text>
            </View>
            <View style={styles.detailb2}>
              <Text style={appStyle.resultText}>Team: {hitter.team} </Text>
              <Text style={appStyle.resultText}>Birthdate: {hitter.birthDate.slice(0, -14)} </Text>
              <Text style={appStyle.resultText}>Height: {hitter.height} </Text>
              <Text style={appStyle.resultText}>Weight: {hitter.weight} </Text>
              <Text style={appStyle.resultText}>Bats: {hitter.bats} </Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <ScrollableTabView
              onChangeTab={this._onChangeTab}
              renderTabBar={() => (
                <DefaultTabBar
                  textStyle={styles.textStyle}
                  underlineStyle={styles.underlineStyle}
                  style={styles.tabBar}
                />)}
            >
              <LHPitch tabLabel="Left Handed Pitcher" info={info} />
              <RHPitch tabLabel="Right Handed Pitcther" info={info} getTabHeight={this._getTabHeight} />
            </ScrollableTabView>
          </View>
        </View>
      </ScrollView>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Info);
