import React, {Component} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import { appStyle } from '../styles'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

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

 class Open extends Component {
   static navigationOptions = {
     title: 'Open',
   };

  constructor(props){
    super(props);

    this.state = {
      searching: false,
      hittersInput:''
      //added for redux nav variables
    }
  }

  async componentWillMount() {
    this.setState({searching: true});
    setTimeout(() => this.props.navigate({key:'Start'}), 6000)
    //this.setState({searching: false});
  }

  render() {
    return (
      <View style={styles.faimageContainer}>
        <Text style={styles.topHeaderText}>Welcome to the Pitcher's Friend</Text>
        <View>
          <TouchableHighlight onPress={ () => this.props.navigate({key:'Start'})}><Image source={require('../images/fireants-med.jpg')} style={styles.faimage} resizeMode="contain" /></TouchableHighlight>
          <Text style={{color:'#5d5d5d', textAlign:'center'}}> Copyright © {(new Date()).getFullYear()} All Rights Reserved. </Text>
          {this.state.searching ? <ActivityIndicator size='large' color='#ff8101' /> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topHeaderText: {
    color:'#5d5d5d',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingTop: 10,
    textAlign: 'center',
    width: window.width,
    height:window.height/7
  },
  faimageContainer: {
    paddingTop: window.height/8,
    width: window.width,
    height: window.height,
    backgroundColor: '#fff'
  },
  faimage: {
    width: window.width,
    height: 200
  }
});

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  }
}

//Added to carry forward additional state items
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Open);
