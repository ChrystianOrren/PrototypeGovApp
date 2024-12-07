import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { Modal } from 'react-native';
const parksandrecEvents = { key: 'Parks and Rec. Event', color: 'blue', nameofEvent: 'FeetToFeast5k', timeStart: "6:00 am", timeEnd: "10:00 am", Description: 'Come join Palm Coast for a fun walk or run 5K around Waterfront Park! All ages are allowed!' }


let DaySelected: string = 'null'
let TimeStart: string  = 'null'
let TimeEnd: string = 'null'
let nameofEvent: string = 'null'
let nameofDepartment: string = 'null'
let currentDescription: string = 'null'
export default function Calendar() {
  const [modalIsOpen, setIsOpen] = useState(false)

  // Define the marked dates, using a key that matches your event's date
  const [markedDates, setMarkedDates] = useState({
    '2025-01-05': { dots: [parksandrecEvents], selected: true }
  });
  // onDayPress event handler
  const handleDayPress = (day: { dateString: string | number; }) => {
    console.log('Selected day:', day);
    // Check if the clicked day has any events
    DaySelected = day.dateString.toString()
    const event = markedDates[day.dateString];
    setIsOpen(true)
    if (event && event.dots && event.dots.length > 0) {
      // Log the event details
      console.log('Event details:', event.dots[0]); // Accessing the first event in the dots array
      nameofDepartment = event.dots[0].key
      nameofEvent = event.dots[0].nameofEvent
      TimeStart = event.dots[0].timeStart
      TimeEnd = event.dots[0].timeEnd
      currentDescription = event.dots[0].Description
    } else {
      console.log('No event for this day.');
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <CalendarList
        markedDates={markedDates} // Use the markedDates state here
        minDate={'2025-01-01'}
        maxDate={'2025-12-31'}
        onDayPress={handleDayPress} // Call the handler on day press
        pastScrollRange={12}
        futureScrollRange={12}
        scrollEnabled={true}
        showScrollIndicator={true}
        theme={{
          selectedDayBackgroundColor: '#2b87b5',
          selectedDayTextColor: 'white',
          todayTextColor: '#2b87b5',
          dotColor: '#2b87b5',
          selectedDotColor: '#ffc323',
          monthTextColor: '#2b87b5',
          indicatorColor: '#2b87b5',
          textMonthFontFamily: 'Poppins-Regular',
          textMonthFontWeight: 'bold',
          textMonthFontSize: 20
        }}
      />
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(!modalIsOpen)
        }}
      >
        <View style={styles.centerdView}>
          <View style={styles.modalView}>
            <Text style ={styles.MainText}> {DaySelected} </Text>
            <Text style ={styles.MainText}>{nameofDepartment}</Text>
            <Text style ={styles.MainText}>{nameofEvent}</Text>
            <Text style ={styles.MainText} >Start: {TimeStart} End: {TimeEnd}</Text>
            <Text style ={styles.MainText} >{currentDescription}</Text>
            <Pressable
            style ={{padding: 5, marginTop: 5, borderWidth: 2, borderRadius: 15, borderColor: '#ffc323', backgroundColor: '#ffc323'}}
              onPress={() => setIsOpen(!modalIsOpen)}>
              <Text style ={{color: 'white', backgroundColor: '#ffc323'}}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centerdView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 5,
    margin: 10,
    borderRadius:15,
    borderColor: "#2b87b5",
    borderWidth: 2,
    padding: 10,
    shadowOpacity: .25,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  MainText: {
    paddingHorizontal: 5,
    textAlign: 'center',
    fontSize: 15,
    color: '#2b87b5',
    fontWeight: 'bold',
    marginVertical: 0,
    fontFamily: 'Poppins-Regular',
    
  }
})
