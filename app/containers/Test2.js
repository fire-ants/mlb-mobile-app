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

class Test2 extends Component {
    render () {
      return (<View>
              <Text> Made it to this page motherfucker</Text>
              <TouchableHighlight onPress={ () => { this.props.navigateBack()} }>
                <Text> Navigate Back</Text>
              </TouchableHighlight>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test2);
