import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../constants/Images'

const SignIn = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image
          source={Images.logo}
          resizeMode='contain'
          className='w-[115px] h-[35px]'
          />

          <Text className='text-2xl text-white font-psemibold mt-10'>Log in to Aora</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn