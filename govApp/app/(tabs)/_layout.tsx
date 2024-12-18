import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faHome, faPencilAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function TabLayout() {
  let iconColor = '#2b87b5'


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2b87b5',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="Inquiry"
        options={{
          title: 'Inquiry',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPencilAlt} size={28} color={iconColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} size={28} color={iconColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="News"
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faNewspaper} size={28} color={iconColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCalendar} size={28} color={iconColor} />
          ),
        }}
      />
    </Tabs>
  );
}
