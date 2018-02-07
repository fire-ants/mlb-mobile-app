import React, {Component} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import { appStyle } from '../styles'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import {StackNavigator} from 'react-navigation';

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
    WebView
 } = ReactNative;

const window = Dimensions.get('window');
const imageWidth = (window.width/3)+30;
const imageHeight = window.width/3;

 class FireAnts extends Component {
   static navigationOptions = {
     title: 'FireAnts',
   };
    constructor(props){
        super(props);

        this.state = {
          searching: false,
          hittersInput:'',
          index: 0,
          //added for redux nav variables
        }
    }

    render() {
        // console.log(this.hitters());
        // console.log('NavigateInfo__' + this.props)
        return (
          <View>
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
          <WebView
            source={{uri: 'https://github.com/facebook/react-native'}}
            style={{marginTop: 20}}
          />
          </View>

      );
    }
}

const styles = StyleSheet.create({
  info: {
    width: 20,
    height: 20,
    marginLeft: 5
  }
});

function mapStateToProps(state) {
  return {
    // searchedHitters: state.searchedHitters,
    navigationState: state.navigationState
  }
}

//Added to carry forward additional state items
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FireAnts);
