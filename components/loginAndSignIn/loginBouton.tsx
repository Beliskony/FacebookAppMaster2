import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LoginBouton = () => {
    return (
        <TouchableOpacity className='h-16 w-full rounded-3xl bg-[#0f37da] justify-center'
         onPress={()=>router.replace('/(tabs)/Acceuil')}>
            <Text className='text-center text-white text-xl font-medium'>Se Connecter</Text>
        </TouchableOpacity>
    );
}


export default LoginBouton;
