import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const WEATHER_API_KEY = 'd1d70a1657a24462bc763faf9d12f839';
const CITY_NAME = 'Palm Coast';
const pcYellow = '#ffc323'

const celsiusToFarenheit = (temp: number) => {
  let fahrenheit = Math.round((temp * (9/5)) + 32)
  console.log(fahrenheit)
  return fahrenheit
}

const convertSunrise = (num: number, time: number) => {
  const clientOffset = new Date().getTimezoneOffset();
  const offsetTimestamp = (num + (clientOffset * 60) + time)
  var date = new Date(offsetTimestamp * 1000);

  console.log(date.toLocaleTimeString())
  return date.toLocaleTimeString();
}

export default function index() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${WEATHER_API_KEY}`)
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
            setWeather(result)
          })
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/images/towncenter.jpg')}
        >
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'white']}
            style={styles.gradient}
          />
          <Image
            source={require('../../assets/images/city-logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.welcomeText}>
          Welcome to the Palm Coast App! Stay informed about city events and news, and easily share your comments or concerns with city staff.
        </Text>

        <Text style={styles.weatherTitle}>Today's Weather</Text>
        <View style={styles.weather}>
          {weather != null ? (
            <>
              <View style={styles.weatherItems}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '20%', alignItems: 'center'}}>
                  <FontAwesome name="thermometer" size={30} color="#ffc323" />
                  <Text style={styles.weatherInfoText}>{celsiusToFarenheit(weather.main.temp)}°f</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '20%', alignItems: 'center'}}>
                  <FontAwesome name="tint" size={30} color="#ffc323" />
                  <Text style={styles.weatherInfoText}>{weather.main.humidity}%</Text>
                </View>
              </View>
              <View style={styles.weatherItems}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '35%', alignItems: 'center'}}>
                  <FontAwesome name="sun-o" size={30} color="#ffc323" />
                  <Text style={styles.weatherInfoText}> {convertSunrise(weather.sys.sunrise, weather.timezone)}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '35%', alignItems: 'center'}}>
                  <FontAwesome name="moon-o" size={30} color="#ffc323" />
                  <Text style={styles.weatherInfoText}> {convertSunrise(weather.sys.sunset, weather.timezone)}</Text>
                </View>
              </View>
            </>
          ) : (
            <></>
          )}
        </View>

        <View style={styles.contact}>
          <Text style={styles.contactText}>Important Contact Info</Text>
          <View style={styles.contactList}>
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>Flagler County Sheriff</Text>
              <Text style={styles.contactPhone}>(386) 437-4116</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>Animal Control</Text>
              <Text style={styles.contactPhone}>(386) 986-2520</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>Fire Department</Text>
              <Text style={styles.contactPhone}>(386) 986-2300</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>Code Enforcement</Text>
              <Text style={styles.contactPhone}>(386) 986-3764</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>Customer Service</Text>
              <Text style={styles.contactPhone}>(386) 986-2360</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '30%',
    width: '100%',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '45%',
  },
  image: {
    width: '70%',
    height: '70%',
  },
  body: {
    padding: 20,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2b87b5',
    textAlign: 'center',
    lineHeight: 32,
    letterSpacing: 0.5,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  weather: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  weatherTitle: {
    color: '#2b87b5',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 20,
  },
  weatherItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  weatherItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  weatherText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  contact: {
    marginTop: 10,
  },
  contactText: {
    color: '#2b87b5',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 20,
  },
  contactList: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  contactPhone: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    textAlign: 'right',
  },
  weatherInfoText: {
    fontSize: 20
  }
});

