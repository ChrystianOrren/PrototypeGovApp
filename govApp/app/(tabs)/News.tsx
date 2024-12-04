import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function News() {
  return (
    <View style={{ flex: 1}}>
      <WebView source={{uri: "https://flaglerlive.com/category/palm-coast/palm-coast-city-council-palm-coast/"}}/>
    </View>
  );
}