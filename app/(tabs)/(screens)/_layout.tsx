import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Entypo, MaterialIcons, EvilIcons} from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
        <Stack.Screen name="albumScreen" options={{ headerShown: false }} />
    </Stack>
  );
}