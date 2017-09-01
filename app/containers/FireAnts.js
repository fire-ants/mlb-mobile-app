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
          scene: {
              flex: 1,
              /*marginTop: 5*/
            },
            searchSection: {
              height: 45,
              flexDirection: 'row',
              /*borderBottomColor: '#000',*/
              borderBottomWidth: 1,
              /*padding: 2,*/
              width: window.width,
              opacity: 0
            },
            container: {
            flexDirection: 'row',
            /*flex: 0,*/
            /*paddingBottom: 50,*/
            /*flexDirection: 'row',*/
            /*alignItems: 'center',*/
            flexWrap: 'wrap',
            width: window.width,
            /*marginBottom: 10,*/
           justifyContent: 'center',
           alignItems: 'flex-end'
          },
          child: {
            /*width: window.width*4,*/
            alignItems: 'flex-start',
            /*height: imageHeight+30,*/
            marginTop: 5,
            marginLeft: 5,
            padding: 10
          },
          image: {
            width: imageWidth,
            height: imageHeight
          },
          text: {
            flex: 1,
            width: imageWidth,
            backgroundColor: '#ff8101',
            color: '#fff',
            padding: 5,
            justifyContent: 'center',
            fontWeight: 'bold',
            //height: 55,
            alignItems: 'center',
            textAlign: 'center'
          },
          teamtext: {
            flex: 1,
            width: imageWidth,
            backgroundColor: '#ff8101',
            color: '#fff',
            padding: 5,
            marginTop: -8,
            justifyContent: 'center',
            fontWeight: 'bold',
            height: 30,
            alignItems: 'center',
            textAlign: 'center'
          },
          searchinput: {
            backgroundColor: '#fff',
            flex: 0.6,
            padding: 5
          },
          searchbutton: {
            backgroundColor: '#ff8101',
            color: '#000',
            flex: 0.4,
            padding: 10
          },
          searching: {
            width: window.width,
            backgroundColor: '#ff8101',
            color: '#fff',
            padding: 5
          },
          topBarText: {
            color:'#ff8101',
            fontWeight: 'bold',
            backgroundColor: '#000',
            height: 20,
            width: window.width,
            paddingLeft: 15,
          },
          activityindicator: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 400
            // position: 'absolute',
            // //marginTop: 157,
            // height: 50
          },
          topHeaderText: {
            color:'#5d5d5d',
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: '#fff',
            //height:50,
            paddingLeft: 15,
            paddingTop: 10,
            textAlign: 'center',
            width: window.width,
            height:window.height/7
          },
        info: {
          width: 20,
          height: 20,
          marginLeft: 5,
          //marginRight:5
        },
        faimageContainer: {
          paddingTop: window.height/8,
          width: window.width,
          height: window.height,
          backgroundColor: '#fff'
        },
        faimage: {
          width: window.width,
          height: 200,
          //justifyContent: 'center',
          //alignItems: 'center'
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
