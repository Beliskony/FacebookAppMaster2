import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MenuHeader = () => {
    return (
    <View className='h-28 flex flex-row w-full justify-between items-center px-2 pt-6'>

           <Text className='text-3xl font-bold text-black'>Menu</Text>

        <View className='flex flex-row'>
             <TouchableOpacity className='justify-center items-center bg-[#b5b1c4] rounded-full '>
                <MaterialIcons name='settings' size={32}/>
             </TouchableOpacity>

             <TouchableOpacity className='justify-center items-center bg-[#b5b1c4] rounded-full mx-2'>
                <MaterialIcons name='search' size={32}/>
             </TouchableOpacity>
        </View>
        
    </View>
    );
}

export default MenuHeader;
