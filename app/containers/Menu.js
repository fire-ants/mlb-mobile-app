import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  WebView
} from 'react-native';

const window = Dimensions.get('window');
const uri = '../images/fireants-med.jpg';

const mstyles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#fff',
    padding: 20,
    marginBottom:20
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    flex: 1,
  },
  name: {
    //position: 'absolute',
    left: 16,
    top: 20,
    color:'#000',
    fontSize: 22,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
    color:'#000'
  },
});

export default function Menu({ onItemSelected }) {
  return (
    <View style={mstyles.menu}>
      <View style={mstyles.avatarContainer}>
        <Image
          style={mstyles.avatar}
          source={require('../images/fireants-med.jpg')}
        />
        <Text style={mstyles.name}>About Pitcher's Friend</Text>
      </View>

      <WebView
        automaticallyAdjustContentInsets={true}
        source={{uri: 'https://fire-ants.github.io/'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
        scalesPageToFit={true}
      />
      {/*}<Text
        onPress={() => onItemSelected('Contacts')}
        style={mstyles.item}
      >
        Contacts
      </Text>*/}
    </View>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
