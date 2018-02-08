import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { appStyle } from '../styles';
import ZoomImage from 'react-native-zoom-image';
import PopoverTooltip from 'react-native-popover-tooltip';
import Api from '../lib/api';

const {
    ActivityIndicator,
    AppRegistry,
    Dimensions,
    Easing,
    ListView,
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
 const imageWidth = (window.width/3)+50;
 const imageHeight = (window.width/3)+75;

class RHPitch extends Component {

  constructor(props){
    super(props);

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      order: 1,
      dataSource: dataSource
    }
  };

  hitter() {
    return this.props.searchedHitters[this.props.navigationParams.id] || null;
  }

  // hitterInsights() {
  //      return Object.keys(this.props.searchedHittersInsights).map(key => this.props.searchedHittersInsights[key])
  // }

  hitterInsights() {

    // const url = `https://mlb-player-api.cfapps.io/player/${this.props.navigationParams.id}/insight`;
        const player = this.props.navigationParams.id
        console.log(player)
        // const jsonData = Api.get(`/player/457759/insight`)

        // var jsonData = {"leftyFindings":["Based on the last 90 days' worth of pitches against this batter, L-handed pitchers have a 52% success rate.","Throw a four-seam fastball down the middle for a success rate of 77%.","Throw a sinker to the top left for a success rate of 75%.","Throw a four-seam fastball to the top left for a success rate of 75%.","Throw a sinker center left for a success rate of 71%.","Throw a four-seam fastball to the bottom left for a success rate of 71%."],"rightyFindings":["Based on the last 90 days' worth of pitches against this batter, R-handed pitchers have a 52% success rate.","Throw a four-seam fastball to the bottom left for a success rate of 79%.","Throw a four-seam fastball bottom center for a success rate of 78%.","Throw a sinker center left for a success rate of 77%.","Throw a change-up center right for a success rate of 76%.","Throw a four-seam fastball down the middle for a success rate of 75%."]}

        // var findings = jsonData.leftyFindings

        // const url = Object.keys(Api.get(`/player/457759/insight`)).map(key => [key]);
        var url = fetch('https://mlb-player-api.cfapps.io/player/514888/insight').then(resp => {
          let json = resp.json();
          if (resp.ok) {
            //console.log(json)
            return json
          }
          return json.then(err => {throw err});

        }).then((data) => {

        //console.log(JSON.stringify(data.rightyFindings));

         //return JSON.stringify(data)
         var findings = Object.assign(data.rightyFindings)

         console.log(findings)

         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         this.state = {
           dataSource: ds.cloneWithRows(data.rightyFindings),
         };

       });

       // return (
       //   <View style={{width:window.width-10 }}>
       //   <ListView
       //     dataSource={this.state.dataSource}
       //     renderRow={(rowData) =>
       //     <View style={{flexDirection:'row'}}>
       //     <View style={{flex:.09}}>
       //     <Image source={require('../images/fireants-nw.png')} style={styles.info} />
       //     </View>
       //     <View style={{flex:.91}}>
       //     <Text style={{padding:2, color:'#fff'}}>
       //     {rowData}
       //     </Text>
       //     </View>
       //     </View>
       //   }
       //   />
       //   </View>
       // );

      //   var findings = Object.assign(url)
      //
      //   console.log(findings)
      //
      //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      //   this.state = {
      //     dataSource: ds.cloneWithRows(findings),
      //   };
      //   return (
      //     <View style={{width:window.width-10 }}>
      //     <ListView
      //       dataSource={this.state.dataSource}
      //       renderRow={(rowData) =>
      //       <View style={{flexDirection:'row'}}>
      //       <View style={{flex:.09}}>
      //       <Image source={require('../images/fireants-nw.png')} style={styles.info} />
      //       </View>
      //       <View style={{flex:.91}}>
      //       <Text style={{padding:2, color:'#fff'}}>
      //       {rowData}
      //       </Text>
      //       </View>
      //       </View>
      //     }
      //     />
      //     </View>
      //   );
    }
    renderList() {
     if (this.state.dataSource._cachedRowCount > 0) {
       return (
         <ListView
           dataSource={this.state.dataSource}
           renderRow={(rowData) =>
           <View style={{flexDirection:'row'}}>
           <View style={{flex:.09}}>
           <Image source={require('../images/fireants-nw.png')} style={styles.info} />
           </View>
           <View style={{flex:.91}}>
           <Text style={{padding:2, color:'#fff'}}>
           {rowData}
           </Text>
           </View>
           </View>
         }
         />
       );
     }
   };
  render () {
    const hitter = this.hitter();
    const hitterInsights = this.hitterInsights();

    if (!hitter) { return null }
    //console.log (`HERE: `+JSON.stringify(hitter))
    console.log(this.hitter())
    console.log(this.hitterInsights())
    //console.log (`HERE: `+hitter.mlbid)
    console.log(this.renderList())
    return (
      <View style = {styles.container}>
      <View style={{flexDirection:'row'}}>
      <View style={{flex:.7, width: window.width, height:40}}>
      <Text style={styles.hvalheader}>HitterVal Measurements</Text>
      </View>
      <View style={{flex:.3, backgroundColor: '#d3d3d3'}}>
      <TouchableOpacity onPress={ () => this.props.navigate({key:'HVKey', id: hitter.mlbid })}>
      <Image source={require('../images/info-icon-63443.png')} style={styles.info} />
      </TouchableOpacity>
      </View>
      </View>
        <View style={{width: window.width}}>
        <Text style={{color:'#ff8e1b'}}>Fire Ants Machine Learning Data:</Text>
        <View style={{width:window.width-10 }}>
        {this.renderList()}
        </View>
        </View>

        <View style={styles.child}>
        <Text style = {styles.text}>FF</Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-FF.png'} }
          style={styles.hmImage}
          imgStyle={styles.hmImage}
          enableScaling={true}
          easingFunc={Easing.bounce}
          />
        </View>
        <View style={styles.child}>
        <Text style = {styles.text}>CH </Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-CH.png'} }
          style={styles.hmImage}
          imgStyle={styles.hmImage}
          enableScaling={true}
          easingFunc={Easing.bounce}
          />
        </View>
        <View style={styles.child}>
        <Text style = {styles.text}>SI </Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-SI.png'} }
          style={styles.hmImage}
          imgStyle={styles.hmImage}
          enableScaling={true}
          easingFunc={Easing.bounce}
          />
        </View>
        <View style={styles.child}>
        <Text style = {styles.text}>CU </Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-CU.png'} }
          style={styles.hmImage}
          imgStyle={styles.hmImage}
          enableScaling={true}
          easingFunc={Easing.bounce}
          />
        </View>
        <View style={styles.child}>
        <Text style = {styles.text}>SL </Text>
        <ZoomImage
          source={ { uri: 'https://s3.amazonaws.com/mlb-pf/'+hitter.mlbid+'-rhp-hv-SL.png'} }
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
      textAlign: 'right',
      //backgroundColor: '#ff8101',
      backgroundColor: '#d3d3d3',
      height: 40,
      paddingTop: 12
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    info: {
      width: 30,
      height: 30,
      //alignItems: 'center',
      //justifyContent: 'center',
    }
});

function mapStateToProps(state) {
  return {
    searchedHitters: state.searchedHitters,
    searchedHittersInsights: state.searchedHittersInsights,
    navigationParams: state.navigationParams,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RHPitch);
