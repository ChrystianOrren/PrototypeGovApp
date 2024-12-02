import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
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
    <ScrollView><View style={styles.Top_container}>
      <Text style={{color:'red', fontSize: 20}}>Inquiry Screen</Text>
      <Text style={styles.MainText}>Insert City Name strives to make your living experience the best it could be. We would greatly appreciate your 
        comments and or concerns to our beloved city and we have created this form in order for you to connect with a city employee. Please fill this out to the best
        of your ability and we will get back to you as soon as possible with your Case.   </Text>
    </View>
    <View style ={styles.Middle_container}>
      <Text style={styles.MainText}> Name:</Text>
      <TextInput
        style={styles.Small_TextInput}
        placeholder="Insert your first and last name"></TextInput>
      <Text style={styles.MainText}> Email:</Text>
      <TextInput
        style={styles.Small_TextInput}
        placeholder="Insert your email adress"></TextInput>

        <Text style={styles.MainText}> Category:</Text>
        <Dropdown
        style={styles.Dropdown}
        placeholderStyle={{}}
        data={data} labelField={'label'} valueField={'value'} value={value} onChange={item => {setValue(item.value);}}
        />
        <Text style={styles.MainText}> Description of Problem or Comment:</Text>
        <TextInput
        style={styles.Small_TextInput}
        placeholder="Insert your comment or concern"
        numberOfLines={5}
        multiline></TextInput>
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
    paddingVertical: "10%",
  },
  Middle_container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  MainText: {
    fontSize: 15,
    color: 'red'
  },
  Small_TextInput:{
    height: 50,
    borderWidth: 1,
    color: 'white'
  },
  Dropdown: {
    backgroundColor: 'white',
    height: 50,
    paddingHorizontal:'5%',
    marginVertical: 20
  }

});
