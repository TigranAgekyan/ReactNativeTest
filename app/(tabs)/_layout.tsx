import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { Image } from 'react-native'
import icons from '../../constants/Icons'

const TabIcon = ({icon, color, name, focused}: any) => {
  return (
    <View className='items-center'>
      <Image
      source={icon}
      resizeMode='contain'
      tintColor={color}
      className='w-6 h-6'
      />
      <Text className={`${focused ? 'font-semibold' : 'font-pregular'} text-xs capitalize`} style={{color: color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84
        }
      }}
      >
        <Tabs.Screen
        name='home'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <TabIcon
            icon={icons.home}
            color={color}
            name={'Home'}
            focused={focused}
            />
          )
        }}
        />

      <Tabs.Screen
        name='create'
        options={{
          headerShown: false,
          title: 'create',
          tabBarIcon: ({color, focused}) => (
            <TabIcon
            icon={icons.plus}
            color={color}
            name={'create'}
            focused={focused}
            />
          )
        }}
        />

      <Tabs.Screen
        name='bookmark'
        options={{
          headerShown: false,
          title: 'bookmark',
          tabBarIcon: ({color, focused}) => (
            <TabIcon
            icon={icons.bookmark}
            color={color}
            name={'bookmark'}
            focused={focused}
            />
          )
        }}
        />

      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          title: 'profile',
          tabBarIcon: ({color, focused}) => (
            <TabIcon
            icon={icons.profile}
            color={color}
            name={'profile'}
            focused={focused}
            />
          )
        }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout