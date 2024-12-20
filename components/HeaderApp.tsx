import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HeaderApp = () => {
    return (
        <View className='flex flex-row w-full h-20 px-2 justify-between items-center'>
            <TouchableOpacity className='h-24 w-48'>
                <Image source={require('../assets/images/FacebookTexte.png')} className='h-24 w-36'/>
            </TouchableOpacity>

            <View className='flex flex-row'>
                 <TouchableOpacity className='justify-center items-center bg-[#b5b1c4] rounded-full '>
                    <MaterialIcons name='add' size={32}/>
                 </TouchableOpacity>

                 <TouchableOpacity className='justify-center items-center bg-[#b5b1c4] rounded-full mx-2'>
                    <MaterialIcons name='search' size={32}/>
                 </TouchableOpacity>

                 <TouchableOpacity className='justify-center items-center bg-[#b5b1c4] rounded-full'>
                    <Image source={{uri:('https://img.icons8.com/?size=100&id=60663&format=png&color=000000')}} className='h-8 w-8'/>
                 </TouchableOpacity>
            </View>
            
        </View>
    );
}

export default HeaderApp;
