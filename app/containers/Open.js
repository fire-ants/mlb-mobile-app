import React, {Component} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import { appStyle } from '../styles'
//import {StackNavigator} from 'react-navigation'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
// import Home from './Home';
// import About from './About';

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
    // componentWillMount() {
    //   this.setState({searching: true});
    //   this.props.fetchHitters(this.state.hittersInput).then(() => {
    //     this.setState({searching: false})
    //   });
    // }
    //
    // searchPressed() {
    //   this.setState({searching: true});
    //   this.props.fetchHitters(this.state.hittersInput).then(() => {
    //     this.setState({searching: false})
    //   });
    // }
    //
    // hitters() {
    //   const players = this.props.searchedHitters
    //   const select = {};
    //
    //   select[514888] = players[514888];
    //   select[453568] = players[453568];
    //   select[457759] = players[457759];
    //   select[519317] = players[519317];
    //   select[458015] = players[458015];
    //   select[547180] = players[547180];
    //   select[641355] = players[641355];
    //   select[592450] = players[592450];
    //   select[545361] = players[545361];
    //   select[457705] = players[457705];
    //   select[502671] = players[502671];
    //   select[518626] = players[518626];
    //   select[502517] = players[502517];
    //   select[518934] = players[518934];
    //   select[592178] = players[592178];
    //   select[471865] = players[471865];
    //   select[519346] = players[519346];
    //   select[460075] = players[460075];
    //
    //   return Object.keys(select).map(key => select[key]);
    // }

    render() {
        return (
          <View style={styles.faimageContainer}>
            <Text style={styles.topHeaderText}>Welcome to the Pitcher's Friend</Text>
            <View>
            <TouchableHighlight onPress={ () => this.props.navigate({key:'Start'})}><Image source={require('../images/fireants-med.jpg')} style={styles.faimage} resizeMode="contain" /></TouchableHighlight>
            <Text style={{color:'#5d5d5d', textAlign:'center'}}> Copyright © 2017 All Rights Reserved. </Text>
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
