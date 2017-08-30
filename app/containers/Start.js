import React, {Component} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import { appStyle } from '../styles'
//import {StackNavigator} from 'react-navigation'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from './Home';
import About from './About';

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

 class Start extends Component {
   static navigationOptions = {
     title: 'Start',
   };
    constructor(props){
        super(props);

        this.state = {
          searching: false,
          hittersInput:''
          //added for redux nav variables

        }
    }

    componentWillMount() {
      this.setState({searching: true});
      this.props.fetchHitters(this.state.hittersInput).then(() => {
        this.setState({searching: false})
      });
    }

    searchPressed() {
      this.setState({searching: true});
      this.props.fetchHitters(this.state.hittersInput).then(() => {
        this.setState({searching: false})
      });
    }

    hitters() {
      const players = this.props.searchedHitters
      const select = {};

      select[514888] = players[514888];
      select[453568] = players[453568];
      select[457759] = players[457759];
      select[519317] = players[519317];
      select[458015] = players[458015];
      select[547180] = players[547180];
      // select[641355] = players[641355];
      // select[592450] = players[592450];
      select[545361] = players[545361];
      select[457705] = players[457705];
      select[502671] = players[502671];
      select[518626] = players[518626];
      select[502517] = players[502517];
      select[518934] = players[518934];
      select[592178] = players[592178];
      select[471865] = players[471865];
      // select[519346] = players[519346];
      select[460075] = players[460075];

      return Object.keys(select).map(key => select[key]);
    }

    render() {
        console.log(this.hitters());
        console.log('NavigateInfo__' + this.props)
        return (
           <Image source={require('../images/black-woven-background.jpg')} style={styles.scene}>
           {/*}<View style={styles.searchSection}>
           <TextInput style={styles.searchinput}
            returnKeyType="search"
            placeholder="Enter Hitter to Search"
            onChangeText={ (hittersInput) => this.setState({hittersInput})}
            value={this.state.hittersInput}
           />
               <TouchableHighlight onPress={ () => this.searchPressed()}>
                 <Text style={styles.searchbutton}>Search Hitters</Text>
               </TouchableHighlight>
            </View>*/}
            <Text style={styles.topHeaderText}>Pitcher's Friend
            <Image source={require('../images/info-icon-63443.png')} style={styles.info} />
            </Text>
            <Text style={styles.topBarText}>Select a hitter to evaluate below:</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {!this.state.searching && this.hitters().map((hitter) => {
                    return <TouchableHighlight key={hitter.id}  style={styles.searchButton} onPress={ () => this.props.navigate({key:'Detail', id: hitter.id})}>
                      <View key={hitter.id} style={styles.child}>
                        <Image
                          source={{uri: `http://mlb.mlb.com/mlb/images/players/head_shot/${hitter.mlbid}.jpg`}}
                          style={styles.image} />
                          <Text style={styles.text} >{hitter.firstName} {hitter.lastName} | </Text>
                      </View>
                    </TouchableHighlight>
                })}
                {this.state.searching ? <ActivityIndicator size='large' color='#ffaa00' contentContainerStylestyle={styles.activityindicator} /> : null}
            </ScrollView>
        </Image>
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
            backgroundColor: '#ffaa00',
            color: '#fff',
            padding: 5,
            justifyContent: 'center',
            fontWeight: 'bold',
            height: 35,
            alignItems: 'center',
          },
          searchinput: {
            backgroundColor: '#fff',
            flex: 0.6,
            padding: 5
          },
          searchbutton: {
            backgroundColor: '#ffaa00',
            color: '#000',
            flex: 0.4,
            padding: 10
          },
          searching: {
            width: window.width,
            backgroundColor: '#ffaa00',
            color: '#fff',
            padding: 5
          },
          topBarText: {
            color:'#ffaa00',
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
            color:'#fff',
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: '#ffaa00',
            height:50,
            paddingLeft: 15,
            paddingTop: 10,
          },
        info: {
          width: 95,
          height: 95,
          marginLeft: 100
        }
        });

function mapStateToProps(state) {
    return {
        searchedHitters: state.searchedHitters,
        navigationState: state.navigationState
          }
}

//Added to carry forward additional state items
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Start);
