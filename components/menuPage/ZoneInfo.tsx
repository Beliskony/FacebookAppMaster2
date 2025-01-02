import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

interface ZoneInfoProps{
    imagePro:string,
    nomProfil:string,
    photoPages:string,
};

const ZoneInfo:React.FC<ZoneInfoProps> = ({imagePro,nomProfil,photoPages}) => {
    return (
        <View className='bg-white rounded-2xl mx-1 px-3 items-center h-20 w-full flex flex-row justify-between'>
           <View className='flex flex-row items-center'>
            <Image className='h-12 w-12 rounded-full' source={{uri:imagePro}}/>
            <Text className='ml-2 text-lg text-black font-semibold'>{nomProfil}</Text>
           </View>

           <View className='flex flex-row items-center justify-center'>
            <TouchableOpacity>
             <MaterialIcons name='autorenew' size={60}/>
               <View className="absolute inset-0 items-center justify-center">
                    <Image className='h-7 w-7 rounded-full' source={{uri:photoPages}}/>
               </View>
            </TouchableOpacity>

            <TouchableOpacity className='h-12 w-12 rounded-full bg-slate-400 items-center justify-center'>
                <MaterialIcons name='expand-more' size={38}/>
            </TouchableOpacity>
           </View>
            
        </View>
    );
}


export default ZoneInfo;
