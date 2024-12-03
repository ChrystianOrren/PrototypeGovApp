import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Parks and Recreation', value: 1},
  {label: 'Water Treatment and Sewage', value: 2},
  {label: 'Code Enforcement', value: 3},
  {label: 'Animal Control', value: 4},
  {label: 'Technical Issues', value: 5},
]



export default function Inquiry() {
  const [value, setValue] = useState(null);
  const[isFocus, setIsFocus] = useState(false);

  return (
    <ScrollView style = {styles.BackgroundView}><View style={styles.Top_container}>
      <Text style={{color:'white', fontSize: 20, paddingVertical: 10, marginBottom: 10, fontWeight:'bold'}}>Inquiry Screen</Text>
      <Text style={{color:'white', fontWeight: 'bold'}}>      Insert City Name strives to make your living experience the best it could be. We would greatly appreciate your 
        comments and or concerns to our beloved city and we have created this form in order for you to connect with a city employee. Please fill this out to the best
        of your ability and we will get back to you as soon as possible with your Case.   </Text>
    </View>
    <View style ={styles.Middle_container}>
      <Text style={styles.MainText}> Name:</Text>
      <TextInput
        style={styles.Small_TextInput}
        placeholder="Insert your first and last name"
        placeholderTextColor={'#2b87b5'}></TextInput>
        
      <Text style={styles.MainText}> Email:</Text>
      <TextInput
        style={styles.Small_TextInput}
        placeholder="Insert your email address"
        placeholderTextColor={'#2b87b5'}></TextInput>

        <Text style={styles.MainText}> Category:</Text>
        <Dropdown
        style={styles.Dropdown}
        placeholderStyle={{color: 'white'}}
        placeholder='Select a Category'
        selectedTextStyle={{color:'white'}}
        iconColor='white'
        data={data} labelField={'label'} valueField={'value'} value={value} onChange={item => {setValue(item.value);}}
        />
        <Text style={styles.MainText}> Description of Problem or Comment:</Text>
        <TextInput
        style={styles.Big_TextInput}
        placeholder="Insert your comment or concern"
        numberOfLines={5}
        multiline
        placeholderTextColor={'#2b87b5'}></TextInput>
      </View>
      <View style = {styles.Bottom_Container}>
        <Button
        title = "Submit"
        color= '#2b87b5'
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Top_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingTop: "10%",
    paddingBottom: "5%",
    backgroundColor: '#2b87b5'
  },
  Middle_container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  MainText: {
    fontSize: 15,
    color: '#2b87b5',
    fontWeight: 'bold',
    marginVertical: 10
  },
  Small_TextInput:{
    height: 40,
    borderWidth: 1,
    color: '#2b87b5',
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  Big_TextInput:{
    height: 200,
    borderWidth: 1,
    color: '#2b87b5',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderColor: '2b87b5',
  },
  Dropdown: {
    backgroundColor: '#2b87b5',
    height: 50,
    paddingHorizontal:'5%',
    color: '#2b87b5',
    textDecorationColor: 'white'
  },
  Bottom_Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginTop: '5%'
  },
  BackgroundView: {
    backgroundColor: 'white'
  }

});
