import React from 'react';
import { View, TextInput } from 'react-native';

const ChampPassword = () => {
    return (

                <View className='h-16 w-full border rounded-xl px-4 my-4 border-[#b5b1c4] justify-center'>
                    <TextInput placeholder='Mot de passe' secureTextEntry={true} placeholderTextColor={'#b5b1c4'} className='text-xl text-[#b5b1c4]'/>
                </View>
        
    );
}

export default ChampPassword;
