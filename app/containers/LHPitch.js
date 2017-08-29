import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { appStyle } from '../styles';

const {
    ActivityIndicator,
    AppRegistry,
    Dimensions,
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet,
 } = ReactNative;

 const window = Dimensions.get('window');
 const imageWidth = (window.width/3)+30;
 const imageHeight = window.width/3;

class LHPitch extends Component {

  constructor(props) {
    super(props)
    this.state = { index: 6 }
  }

  hitter() {
    return this.props.searchedHitters[this.props.navigationParams.id] || null;
  }

  render () {
    const hitter = this.hitter();
    if (!hitter) { return null }
    console.log (`HERE: `+JSON.stringify(hitter))

    //console.log (`HERE: `+hitter.mlbid)
    return (
      <View style = {styles.scene}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hm-FF.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-FF.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hm-CH.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-CH.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hm-SI.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-SI.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hm-CU.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-CU.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hm-SL.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-SL.png'} } style={styles.hmImage} /></View></TouchableHighlight>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
      flex: 1,
      /*marginTop: 5*/
    },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: window.width,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
    child: {
      /*width: window.width*4,*/
      alignItems: 'flex-start',
      /*height: imageHeight+30,*/
      marginTop: 5,
      marginLeft: 5,
      padding: 2
    },
    hmImage: {
      width: imageWidth,
      height: imageHeight
    }
});

function mapStateToProps(state) {
  return {
    searchedHitters: state.searchedHitters,
    navigationParams: state.navigationParams,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LHPitch);
