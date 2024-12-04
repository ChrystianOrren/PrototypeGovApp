import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Parks and Recreation', value: 1},
  {label: 'Water Treatment and Sewage', value: 2},
  {label: 'Code Enforcement', value: 3},
  {label: 'Animal Control', value: 4},
  {label: 'Technical Issues', value: 5},
]

const submitInquiry = () => {
    console.log("submitting")
}


export default function Inquiry() {
  const [value, setValue] = useState(null);
  const[isFocus, setIsFocus] = useState(false);

  return (
    <ScrollView style = {styles.BackgroundView}>

        <View style={styles.Top_container}>
            <Text style={{color:'#2b87b5', fontSize: 40, paddingTop: 40, marginBottom: 5, fontWeight:'bold'}}>Create an Inquiry...</Text>
            <Text style={{color:'#2b87b5', fontSize: 12, marginBottom: 10}}>
                Palm Coast is dedicated to enhancing your living experience. 
                Share your comments or concerns using this form to connect with a city employee. 
                Fill it out, and we'll respond to your case as soon as possible.
            </Text>
        </View>

        <View style ={styles.Middle_container}>
            <Text style={styles.MainText}> Name:</Text>
            <TextInput
                style={styles.Small_TextInput}
                placeholder="Insert your first and last name"
                placeholderTextColor={'#2b87b5'}>
            </TextInput>
        
            <Text style={styles.MainText}> Email:</Text>
            <TextInput
                style={styles.Small_TextInput}
                placeholder="Insert your email address"
                placeholderTextColor={'#2b87b5'}>
            </TextInput>

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
                textAlignVertical="top"
                placeholderTextColor={'#2b87b5'}>
            </TextInput>
        </View>
        <View style = {styles.Bottom_Container}>
            <TouchableOpacity style={styles.button} onPress={() => submitInquiry()}>
                <Text style={styles.buttonText}>Submit Inquiry</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Top_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: '5%',
    paddingTop: "5%",
    paddingBottom: "5%",
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
    marginVertical: 0,
    fontFamily: 'Poppins-Regular'
  },
  Small_TextInput:{
    height: 40,
    borderWidth: 1,
    color: '#2b87b5',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginBottom: '8%',
    borderRadius: 15
  },
  Big_TextInput:{
    height: 200,
    borderWidth: 1,
    color: '#2b87b5',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderColor: '2b87b5',
    borderRadius: 15
  },
  Dropdown: {
    backgroundColor: '#2b87b5',
    height: 50,
    paddingHorizontal: 10,
    color: '#2b87b5',
    textDecorationColor: 'white',
    marginBottom: '8%',
    borderRadius: 15
  },
  Bottom_Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    marginTop: '3%',
    width: '100%'
  },
  BackgroundView: {
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#ffc323',
    padding: '4%',
    width: '60%',
    borderRadius: 50,
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
