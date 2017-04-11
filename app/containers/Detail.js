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

class Detail extends Component {

/*  recipe() {
    return this.props.searchedRecipes[this.props.navigationParams.id] || null;
  }*/

  hitter() {
      return this.props.searchedHitters[this.props.navigationParams.id] || null;
    }


  render() {
    const hitter = this.hitter();
    if (!hitter) { return null }

    return <View>
      <TouchableHighlight style={ { flex: 1, paddingVertical: 20, backgroundColor: '#222' } } onPress={ () => { this.props.navigateBack() } }>
        <Text style={{ color: '#FFF' } }>Go Back</Text>
      </TouchableHighlight>
      <View>
      //FIX
        <Image source={ { uri: 'http://mlb.mlb.com/mlb/images/players/head_shot/'+hitter.mlbid+'.jpg' } } style={styles.image} />
        <Text style={styles.text} >{hitter.firstName} {hitter.lastName} | </Text>
      </View>
    </View>
  }
}


function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes,
    navigationParams: state.navigationParams,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
