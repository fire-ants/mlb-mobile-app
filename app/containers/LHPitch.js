import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { appStyle } from '../styles';
import ZoomImage from 'react-native-zoom-image';
import PopoverTooltip from 'react-native-popover-tooltip';

const {
    ActivityIndicator,
    AppRegistry,
    Dimensions,
    Easing,
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

class LHPitch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      order: 1
      //index: 6
       }
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
      <PopoverTooltip
      ref='tooltip1'
      buttonComponent={
      <View style={{width: window.width, height:40}}><Text style={styles.hvalheader}>HitterVal Measurements
      <Image source={require('../images/info-icon-63443.png')} style={styles.info} />
      </Text></View>
      }
      items={[
      {
        label: 'Touch the items below to see hitter performance data by pitch - FF=Four-Seam Fastball, CH=Changeup, SI=Sinker, CU=Curveball, SL=Slider ',
        onPress: () => {}
      }
      ]}
      // animationType='timming'
      // using the default timming animation
      />
        <View style={styles.child}>
        <Text style = {styles.text}>FF </Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-FF.png'} }
          style={styles.hmImage}
          imgStyle={styles.hmImage}
          enableScaling={true}
          easingFunc={Easing.bounce}
          />
        </View>
        <View style={styles.child}>
        <Text style = {styles.text}>CH </Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-CH.png'} }
          style={styles.hmImage}
          imgStyle={styles.hmImage}
          enableScaling={true}
          easingFunc={Easing.bounce}
          />
        </View>
        <View style={styles.child}>
        <Text style = {styles.text}>SI </Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-SI.png'} }
          style={styles.hmImage}
          imgStyle={styles.hmImage}
          enableScaling={true}
          easingFunc={Easing.bounce}
          />
        </View>
        <View style={styles.child}>
        <Text style = {styles.text}>CU </Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-CU.png'} }
          style={styles.hmImage}
          imgStyle={styles.hmImage}
          enableScaling={true}
          easingFunc={Easing.bounce}
          />
        </View>
        <View style={styles.child}>
        <Text style = {styles.text}>SL </Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-SL.png'} }
          style={styles.hmImage}
          imgStyle={styles.hmImage}
          enableScaling={true}
          easingFunc={Easing.bounce}
          />
        </View>
        </View>

        // <View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-FF.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        // <Text style = {styles.text}>CH </Text><TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hm-CH.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        // <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-CH.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        // <Text style = {styles.text}>SI </Text><TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hm-SI.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        // <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-SI.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        // <Text style = {styles.text}>CU </Text><TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hm-CU.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        // <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-CU.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        // <Text style = {styles.text}>SL </Text><TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hm-SL.png'} } style={styles.hmImage} /></View></TouchableHighlight>
        // <TouchableHighlight><View style={styles.child}><Image source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-lhp-hv-SL.png'} } style={styles.hmImage} /></View></TouchableHighlight>
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
    },
    hvalheader: {
      color:'#000',
      fontWeight: 'bold',
      textAlign: 'center',
      //backgroundColor: '#ff8101',
      backgroundColor: '#d3d3d3',
      height: 40
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    info: {
      width: 95,
      height: 95,
      alignItems: 'center',
      justifyContent: 'center',
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
