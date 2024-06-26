import { Tabs } from 'expo-router';
import React from 'react';
import { Entypo, MaterialIcons, EvilIcons} from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import PlayerWidget from '@/components/PlayerWidget';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle:'Home',
          tabBarIcon: ({ color }) => (
            <Entypo name='home' size={28} color={color} style={{marginBottom:-3}}/>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color}) => (
            <EvilIcons name="search" color={color} size={40} style={{marginBottom:3}} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color}) => (
            <MaterialIcons name="my-library-music" color={color} size={28} style={{marginBottom:-3}}/>
          ),
        }}
      />
      <Tabs.Screen
        name="(screens)"
        options={{
          href: null
        }}
      />
    </Tabs>
    <PlayerWidget/>
    </>
  );
}
