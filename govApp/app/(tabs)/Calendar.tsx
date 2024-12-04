import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { Modal } from 'react-native';
const parksandrecEvents = { key: 'ParksandRecEvents', color: 'blue', nameofEvent: 'Yawn' }

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
    const event = markedDates[day.dateString];
    setIsOpen(true)
    if (event && event.dots && event.dots.length > 0) {
      // Log the event details
      console.log('Event details:', event.dots[0]); // Accessing the first event in the dots array
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
            <Text> GoobaGoo</Text>
            <Pressable
              onPress={() => setIsOpen(!modalIsOpen)}>
              <Text>Close</Text>
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
    backgroundColor: 'blue',
    alignItems: 'center',
    elevation: 5
  }
})
