import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 4,
              backgroundColor: focused ? '#6C63FF' : '#CCCCCC',
              marginBottom: 4,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="author"
        options={{
          title: 'Author',
        }}
      />
    </Tabs>
  );
}
