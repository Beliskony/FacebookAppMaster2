import { router } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

const CreerCompte = () => {
    return (
     <View className='flex flex-col w-full'>
       <TouchableOpacity className='h-16 w-full rounded-3xl border border-[#0f37da] justify-center hover:bg-white'
         onPress={()=>router.replace('/screens/SignIn')}>
        <Text className='text-center text-[#0f37da] text-xl font-medium w-full'>Creer un Compte</Text>
       </TouchableOpacity>  
      
      <View className='flex flex-row w-full items-center justify-center py-3'>
        <Image source={{uri:'https://img.icons8.com/?size=100&id=1rWM8zYmJ1ks&format=png&color=b5b1c4'}} className='h-7 w-7'/>
        <Text className='text-xl text-[#b5b1c4] font-bold px-1'>Meta</Text>
      </View>
     
     </View>      
    );
}


export default CreerCompte;
