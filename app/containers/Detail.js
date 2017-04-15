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
}

  hitter() {
      return this.props.searchedHitters[this.props.navigationParams.id] || null;
    }

    _onChangeTab({ i, ref }) {
  this.setState({ tab: i });
  }

  _onContentSizeChange(width, height) {
		if (this.state.tab === 0 && this.state.infoTabHeight === this.state.lhpitchTabHeight) {
			this.setState({ rhpitchTabHeight: height });
		}
	}

  _getTabHeight(tabName, height) {
  if (tabName === 'lhpitch') this.setState({ lhpitchTabHeight: height });
  if (tabName === 'rhpitch') this.setState({ rhpitchTabHeight: height });
}

  render() {
    console.log(hitter)
    console.log(this.props)
    console.log (this.state.tab)
    const {details} = this.props;
    const info = details;

    let height;
    if (this.state.tab === 0) height = this.state.lhpitchTabHeight;
    if (this.state.tab === 1) height = this.state.rhpitchTabHeight;

    const hitter = this.hitter();
    if (!hitter) { return null }

    return (
      <View>
        <TouchableHighlight style={ { paddingVertical: 10, backgroundColor: '#222' } } onPress={ () => { this.props.navigateBack() } }>
          <Text style={{ color: '#fff' } }> Return to Hitters List</Text>
        </TouchableHighlight>
        <View style={{backgroundColor: '#000'}}>
          <Image source={ { uri: 'http://mlb.mlb.com/mlb/images/players/head_shot/'+hitter.mlbid+'.jpg' } } style={appStyle.resultImage} />
          <Text style={appStyle.resultText} >{hitter.firstName} {hitter.lastName} | </Text>
        </View>

      <View style={styles.cardContainer}>
      <ScrollableTabView
        onChangeTab={this._onChangeTab}
        renderTabBar={() => (
          <DefaultTabBar
            textStyle={styles.textStyle}
            underlineStyle={styles.underlineStyle}
            style={styles.tabBar}
          />
        )}>
        <LHPitch tabLabel="Left Handed Pitcher" info={info} />
        <RHPitch tabLabel="Right Handed Pitcther" info={info} getTabHeight={this._getTabHeight} />
      </ScrollableTabView>
    </View>
  </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
