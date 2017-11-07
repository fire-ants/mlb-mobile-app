import React, {Component} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import { appStyle } from '../styles'
//import { styles } from './styles/sMenu'
//import {StackNavigator} from 'react-navigation'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
//import Home from './Home';
//import About from './About';

import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

import {StackNavigator} from 'react-navigation';

const {
    ActivityIndicator,
    AppRegistry,
    Dimensions,
    Modal,
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    TouchableOpacity,
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

        this.toggle = this.toggle.bind(this);

        this.state = {
          searching: false,
          hittersInput:'',
          isOpen: false,
          selectedItem: 'About',
          modalVisable: false,
          //added for redux nav variables
        }

    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
   }

    toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

    updateMenuState(isOpen) {
      this.setState({ isOpen });
    }

    onMenuItemSelected = item =>
      this.setState({
        isOpen: false,
        selectedItem: item,
      });

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
      select[641355] = players[641355];
      select[592450] = players[592450];
      select[545361] = players[545361];
      select[457705] = players[457705];
      select[502671] = players[502671];
      select[518626] = players[518626];
      select[502517] = players[502517];
      select[518934] = players[518934];
      select[592178] = players[592178];
      select[471865] = players[471865];
      select[519346] = players[519346];
      select[460075] = players[460075];

      return Object.keys(select).map(key => select[key]);
    }

    render() {
        console.log(this.hitters());
        console.log('NavigateInfo__' + this.props)

        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        const hitterimage='https://d3k2oh6evki4b7.cloudfront.net/req/201707131/images/headshots/f/f0e8fd62_mlbam.jpg'


        return (
          <SideMenu
             menu={menu}
             isOpen={this.state.isOpen}
             onChange={isOpen => this.updateMenuState(isOpen)}
           >
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
            <View style={{flex:1, width:window.width}}>
            <View style={{flexDirection:'row'}}>
            <View style={{flex:.32, backgroundColor:'#ff8101'}}>
            <TouchableOpacity
              onPress={this.toggle}
              style={styles.button}
            >
            <Image source={require('../images/menu-alt-512.png')} style={styles.info} />
            </TouchableOpacity>
            </View>
            <View style={{flex:.68}}>
            <Text style={styles.topHeaderText}>Pitcher's Friend
            {/*<Image source={require('../images/info-icon-63443.png')} style={styles.info} onLayout={this.getNewDimensions}/>*/}
            </Text>
            </View>
            </View>
            <Text style={styles.topBarText}>Select a hitter to evaluate:</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {!this.state.searching && this.hitters().map((hitter) =>
                  {
                    return <TouchableHighlight key={hitter.id}  style={styles.searchButton} onPress={ () => this.props.navigate({key:'Detail', id: hitter.id})} style={styles.imageBorder}>
                      <View key={hitter.id} style={styles.child}>
                      <View>
                        {(() => {
                          switch (hitter.id) {
                            case 514888 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/f0e8fd62_mlbam_altuve_514888.jpg`}} style={styles.image} />;
                            case 453568 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/12154e57_mlbam_blackmon_453568.jpg`}} style={styles.image} />;
                            case 457759 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/fbc00dba_mlbam_turner_457759.jpg`}} style={styles.image} />;
                            case 519317 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/87f6986b_mlbam_stanton_519317.jpg`}} style={styles.image} />;
                            case 458015 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/9f4721ab_mlbam_votto_458015.jpg`}} style={styles.image} />;
                            case 547180 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/c61e922e_mlbam_harper_547180.jpg`}} style={styles.image} />;
                            case 641355 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/32775691_mlbam_bellinger_641355.jpg`}} style={styles.image} />;
                            case 592450 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/06c9f502_mlbam_judge_592450.jpg`}} style={styles.image} />;
                            case 545361 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/f322d40f_mlbam_545361.jpg`}} style={styles.image} />;
                            case 457705 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/f3998f8d_mlbam_mccutchen_457705.jpg`}} style={styles.image} />;
                            case 502671 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/6b37a7f2_mlbam_goldschmidt_502671.jpg`}} style={styles.image} />;
                            case 518626 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/3af4cc98_mlbam_donaldson_518626.jpg`}} style={styles.image} />;
                            case 502517 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/17225395_mlbam_murphy_502517.jpg`}} style={styles.image} />;
                            case 518934 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/07868aab_mlbam_lemahieu_518934.jpg`}} style={styles.image} />;
                            case 592178 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/1d358f93_mlbam_bryant_592178.jpg`}} style={styles.image} />;
                            case 471865 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/4b177c4a_mlbam_gonzalez_471865.jpg`}} style={styles.image} />;
                            case 519346 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/a96c3457_mlbam_thames_519346.jpg`}} style={styles.image} />;
                            case 460075 : return <Image source={{uri:`https://s3.amazonaws.com/mlb-pf/8b4db8f5_mlbam_braun_460075.jpg`}} style={styles.image} />;
                            default: return <Image source={{uri:``}} style={styles.image} />;
                          }
                        })()}
                        </View>
                          <Text style={styles.text} >{hitter.firstName} {hitter.lastName} | {hitter.position} </Text>
                          <Text style={styles.teamtext}>{hitter.team}</Text>
                      </View>
                    </TouchableHighlight>
                })}
                {this.state.searching ? <ActivityIndicator size='large' color='#ff8101' contentContainerStylestyle={styles.activityindicator} /> : null}
            </ScrollView>
          </View>
        </Image>
        </SideMenu>
      );
    }
}

        const styles = StyleSheet.create({
          scene: {
              flex: 1,
            },
            searchSection: {
              height: 45,
              flexDirection: 'row',
              borderBottomWidth: 1,
              width: window.width,
              opacity: 0
            },
            container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: window.width,
           justifyContent: 'center',
           alignItems: 'flex-end'
          },
          child: {
            alignItems: 'flex-start',
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
            backgroundColor: '#d3d3d3',
            color: '#000',
            padding: 5,
            justifyContent: 'center',
            fontWeight: 'bold',
            alignItems: 'center',
            textAlign: 'center',
            borderRightColor: '#ff8101',
            borderLeftColor: '#ff8101',
            borderTopWidth: 2,
            borderTopColor: '#ff8101',
            //borderLeftWidth: 1,
            //borderRightWidth: 1,
          },
          teamtext: {
            flex: 1,
            width: imageWidth,
            //backgroundColor: '#ff8101',
            backgroundColor: '#d3d3d3',
            color: '#000',
            padding: 5,
            marginTop: -8,
            justifyContent: 'center',
            fontWeight: 'bold',
            height: 30,
            alignItems: 'center',
            textAlign: 'center',
            borderRightColor: '#ff8101',
            borderLeftColor: '#ff8101',
            //borderLeftWidth: 1,
            //borderRightWidth: 1,
            //borderBottomWidth: 1,
            borderBottomColor: '#ff8101'
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
            //color:'#ff8101',
            color:'#fff',
            fontWeight: 'bold',
            backgroundColor: '#000',
            height: 20,
            width: window.width,
            paddingLeft: 10,
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
            backgroundColor: '#ff8101',
            height:50,
            //paddingLeft: 15,
            paddingTop: 10,
            paddingRight: 5,
            //width: window.width,
            textAlign: 'left'
          },
        info: {
          width: 35,
          height: 35,
          //marginLeft: 100,
          marginLeft: 10,
          marginTop: 8
        },
        imageBorder: {
        },
        dcontainer: {
          flex:1
        },
        main: {
          position: 'absolute',
          backgroundColor: '#000'
        },
        head: {
          height: 60,
          marginBottom: 200,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: '#6a0d45'
        },
        content: {
          flex: 1,
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: '#e3b8cb'
        },
        drawerContent: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        leftTop: {
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'stretch',
          alignSelf: 'stretch',
          backgroundColor: '#8ad8dd'
        },
        leftBottom: {
          flex: 2,
          justifyContent: 'space-around',
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: '#f0f0f0'
        },
        leftDrawer: {
          borderRightWidth: 4,
          borderRightColor: '#5b585a'
        },
        rightDrawer: {
          borderLeftWidth: 4,
          borderLeftColor: '#5b585a'
        },
        btn1: {
          marginTop: 10,
          padding: 10,
          overflow: 'hidden',
          borderRadius: 5,
          backgroundColor: '#f06355'
        },
        btn2: {
          marginTop: 10,
          padding: 10,
          overflow: 'hidden',
          borderRadius: 5,
          backgroundColor: '#37b9d5'
        },
        btnText: {
          fontSize: 14,
          color: '#f0f0f0'
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
