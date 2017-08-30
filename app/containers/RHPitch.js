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
 const imageWidth = (window.width/3)+50;
 const imageHeight = (window.width/3)+75;

class RHPitch extends Component {

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
      <View style = {styles.container}>
        <Text style = {styles.text}>FF </Text><TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hm-FF.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-FF.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <Text style = {styles.text}>CH </Text><TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hm-CH.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-CH.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <Text style = {styles.text}>SI </Text><TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hm-SI.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-SI.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <Text style = {styles.text}>CU </Text><TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hm-CU.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-CU.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <Text style = {styles.text}>SL </Text><TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hm-SL.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-SL.png'} } style={styles.hmImage} /></View></TouchableHighlight>
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
    alignItems: 'flex-end',
    marginBottom: 5
    },
    child: {
      /*width: window.width*4,*/
      alignItems: 'flex-start',
      /*height: imageHeight+30,*/
      marginTop: 5,
    //  marginLeft: 5,
      paddingTop: 2,
      paddingRight: 6,
      paddingBottom: 2
    },
    text : {
      color: '#fff',
      paddingRight: 2
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

export default connect(mapStateToProps, mapDispatchToProps)(RHPitch);
