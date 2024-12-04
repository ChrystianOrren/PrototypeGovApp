import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';


export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'red'}}>Home Screen</Text>
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