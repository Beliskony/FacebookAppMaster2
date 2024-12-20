import React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';

const FaireUnPoste = () => {
    return (
        <View className='flex flex-row h-16 w-full px-4  bg-white'>
            <View className='w-[90%] flex-row items-center'>
                <Image source={{uri:'https://i.pinimg.com/736x/07/fe/b5/07feb5c356adc788d93a6730929ff28c.jpg'}} className='h-8 w-8 rounded-full object-cover'/>
                <TextInput placeholder='Quoi de neuf ?' placeholderTextColor={'black'} className='w-full px-3'/>
            </View>

            
            <View className='w-8 justify-center items-center'>
                 <TouchableOpacity>
                    <Image source={{uri:'https://img.icons8.com/?size=100&id=hIayznuWduuR&format=png&color=000000'}} className='h-8 w-8 object-cover'/>
                 </TouchableOpacity>
            </View>
        </View>
    );
}


export default FaireUnPoste;
