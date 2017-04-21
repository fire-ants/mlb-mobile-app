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

class RHPitch extends Component {

  constructor(props) {
    super(props)
    this.state = { index: 7 }
  }

  render () {
    console.log (this.props)
    return (
      <View>
          <Text>This is tab RHPitch - aka right handed pitchers </Text>
      <TouchableHighlight onPress={ () => this.props.navigate({key: 'Start'})}>
        <Text>Jump to Start</Text>
      </TouchableHighlight>
      <Text>HitterVal Objects and HeatMap to be placed here</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(RHPitch);
