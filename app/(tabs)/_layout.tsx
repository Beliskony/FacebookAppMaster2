import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import '../../global.css'
import { View,Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        
        tabBarActiveTintColor: '#0178f6',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle:{
          backgroundColor:'#FFF',
          borderTopWidth: 0.5,
          borderTopColor:'#000'
        },
      }}>
      
      <Tabs.Screen
        name="Acceuil"
        options={{
          title: 'Acceuil',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="VideoS"
        options={{
          title: 'Video',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="ondemand-video" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Amie"
        options={{
          title: 'Ami(e)s',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="people" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Marketplace"
        options={{
          title: 'Marketplace',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="storefront" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="notifications" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Menu"
        options={{
          title: 'menu',
          tabBarIcon: ({ color }) =>(
            <View className=' items-end h-10 w-10 '>   
              <Image className='rounded-full h-9 w-9 object-cover bg-black opacity-90' source={{uri:'https://i.pinimg.com/474x/8e/71/25/8e71254c516399d90325aa44aebbf973.jpg'}}/>
              <MaterialIcons size={17} name="menu" color='white' className='absolute mt-5 ml-4 bg-gray-600 rounded-full' />
            </View>
        ),
        }}
      />
    </Tabs>
  );
}
