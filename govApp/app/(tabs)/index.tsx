import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';


export default function index() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.header}
        source={require('../../assets/images/towncenter.jpg')}
      >
        <Image
          source={require('../../assets/images/city-logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </ImageBackground>
      {/* <ScrollView contentContainerStyle={styles.body}>
        <Text>Body</Text>
      </ScrollView> */}
      <WebView source={{uri: "https://flaglerlive.com/category/palm-coast/palm-coast-city-council-palm-coast/"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  }
})