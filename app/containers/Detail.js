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

class Detail extends Component {

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
    return this.props.searchedHittersInsights[this.props.navigationParams.id] || null;
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
            <View style={{flexDirection:'row'}}>
            <View style={{flex:.1}}>
            <Image source={require('../images/backbutton.png')} style={styles.info} />
            </View>
            <View style={{flex:.9}}>
            <Text style={{color: '#fff'}}>
              Return to Hitters List
            </Text></View>
            </View>
          </TouchableHighlight>
          <View style={styles.detailBox}>
            <View style={styles.detailb1}>
            {(() => {
              switch (hitter.id) {
                case 514888 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/f0e8fd62_mlbam_altuve_514888.jpg`}} style={appStyle.resultImage} />;
                case 453568 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/12154e57_mlbam_blackmon_453568.jpg`}} style={appStyle.resultImage} />;
                case 457759 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/fbc00dba_mlbam_turner_457759.jpg`}} style={appStyle.resultImage} />;
                case 519317 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/87f6986b_mlbam_stanton_519317.jpg`}} style={appStyle.resultImage} />;
                case 458015 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/9f4721ab_mlbam_votto_458015.jpg`}} style={appStyle.resultImage} />;
                case 547180 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/c61e922e_mlbam_harper_547180.jpg`}} style={appStyle.resultImage} />;
                case 641355 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/32775691_mlbam_bellinger_641355.jpg`}} style={appStyle.resultImage} />;
                case 592450 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/06c9f502_mlbam_judge_592450.jpg`}} style={appStyle.resultImage} />;
                case 545361 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/f322d40f_mlbam_545361.jpg`}} style={appStyle.resultImage} />;
                case 457705 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/f3998f8d_mlbam_mccutchen_457705.jpg`}} style={appStyle.resultImage} />;
                case 502671 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/6b37a7f2_mlbam_goldschmidt_502671.jpg`}} style={appStyle.resultImage} />;
                case 518626 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/3af4cc98_mlbam_donaldson_518626.jpg`}} style={appStyle.resultImage} />;
                case 502517 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/17225395_mlbam_murphy_502517.jpg`}} style={appStyle.resultImage} />;
                case 518934 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/07868aab_mlbam_lemahieu_518934.jpg`}} style={appStyle.resultImage} />;
                case 592178 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/1d358f93_mlbam_bryant_592178.jpg`}} style={appStyle.resultImage} />;
                case 471865 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/4b177c4a_mlbam_gonzalez_471865.jpg`}} style={appStyle.resultImage} />;
                case 519346 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/a96c3457_mlbam_thames_519346.jpg`}} style={appStyle.resultImage} />;
                case 460075 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/8b4db8f5_mlbam_braun_460075.jpg`}} style={appStyle.resultImage} />;
                default: return <Image source={{uri:``}} style={appStyle.resultImage} />;
              }
            })()}
              <Text style={appStyle.resultText} >{hitter.firstName} {hitter.lastName} | {hitter.position} </Text>
            </View>
            <View style={styles.detailb2}>
              <Text style={appStyle.resultTextD}>Team: {hitter.team} </Text>
              <Text style={appStyle.resultTextD}>Birthdate: {hitter.birthDate.slice(0, -14)} </Text>
              <Text style={appStyle.resultTextD}>Height: {hitter.height} </Text>
              <Text style={appStyle.resultTextD}>Weight: {hitter.weight} </Text>
              <Text style={appStyle.resultTextD}>Bats: {hitter.bats} </Text>
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
    searchedHittersInsights: state.searchedHittersInsights,
    navigationParams: state.navigationParams,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
