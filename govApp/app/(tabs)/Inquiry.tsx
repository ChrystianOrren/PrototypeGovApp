import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Inquiry() {
  return (
    <View style={styles.Top_container}>
      <Text style={{color:'red', fontSize: 20}}>Inquiry Screen</Text>
      <Text style={{color: 'red'}}>Insert City Name strives to make your living experience the best it could be. We would greatly appreciate your 
        comments and or concerns to our beloved city and we have created this form in order for you to connect with a city employee. Please fill this out to the best
        of your ability and we will get back to you as soon as possible with your Case.   </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Top_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%'
  },
  Middle_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%'
  }


});
