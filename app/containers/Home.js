import React, {Component} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import { appStyle } from '../styles';

const {
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

class Home extends Component {

  constructor(props){
    super(props);
    this.state = { searching: false, hittersInput:''}
  }
  searchPressed() {
    this.setState({searching: true});
    this.props.fetchHitters(this.state.hittersInput).then(() => {
      this.setState({searching: false})
    });
  }

  hitters() {
    // return Object.keys(this.props.searchedHitters).map(key => this.props.searchedHitters[key])
    return Object.keys(this.props.searchedHitters).map(key => this.props.searchedHitters[key])
  }

  render() {
    console.log(this.hitters());
    return <Image source={require('../images/black-woven-background.jpg')} style={styles.scene}>
           <View style={styles.searchSection}>
           <TextInput style={styles.searchinput}
            returnKeyType="search"
            placeholder="Enter Hitter to Search"
            onChangeText={ (hittersInput) => this.setState({hittersInput})}
            value={this.state.hittersInput}
           />
               <TouchableHighlight onPress={ () => this.searchPressed()}>
                 <Text style={styles.searchbutton}>Search Hitters</Text>
               </TouchableHighlight>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                {!this.state.searching && this.hitters().map((hitter) => {
                    return <TouchableHighlight key={hitter.id}  style={styles.searchButton} onPress={ () => this.props.replace({ key: 'Detail', id: hitter.id}) }>
                    <View key={hitter.id} style={styles.child}>
                    {/*Sample Data View Field*/}
                    <Image source={ { uri: 'http://mlb.mlb.com/mlb/images/players/head_shot/'+hitter.mlbid+'.jpg' } } style={styles.image} />
                    <Text style={styles.text} >{hitter.firstName} {hitter.lastName} | </Text>

                    </View>
                    </TouchableHighlight>
                })}
                {this.state.searching ? <Text style={styles.searching}>Searching...</Text> : null}
            </ScrollView>
        </Image>
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
    width: window.width
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
    width: imageWidth,
    backgroundColor: '#ff8101',
    color: '#000',
    padding: 2,
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    height: 55,
    alignItems: 'center'
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
  }
});

function mapStateToProps(state) {
  return {
    searchedHitters: state.searchedHitters
  }
}
export default connect(mapStateToProps)(Home);
