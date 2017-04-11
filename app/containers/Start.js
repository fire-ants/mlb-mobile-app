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

 class Start extends Component {

    constructor(props){
        super(props);
        this.state = { searching: false, hittersInput:''}
    }
    searchPressed() {
        //Sample Data Query Open Search
       this.setState({searching: true});
       this.props.fetchHitters(this.state.hittersInput).then(() => {
       this.setState({searching: false})
       });
       //Our Data Query Explicit
       //this.props.fetchHitters('')
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
                    {/*Our Data View Field*/}
                    {/*<Text>{hitter.mlbid}</Text>*/}
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
              /*marginTop: 5*/
            },
            searchSection: {
              height: 45,
              flexDirection: 'row',
              /*borderBottomColor: '#000',*/
              borderBottomWidth: 1,
              /*padding: 2,*/
              width: window.width
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
            width: imageWidth,
            backgroundColor: '#ffaa00',
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
          }
        });

function mapStateToProps(state) {
    return {
        searchedHitters: state.searchedHitters
    }
}
export default connect(mapStateToProps)(Start);