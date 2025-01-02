import React from 'react';
import { View,Image, Text, TouchableOpacity } from 'react-native';

interface OngletListProps{
    iconesBlock: string;
    texteIndicatif: string;
}

const OngletList: React.FC<OngletListProps> = ({iconesBlock, texteIndicatif}) => {
    return (
        <View className='bg-white w-48 flex flex-col border-[0.5px] rounded-2xl mx-2 my-1 justify-center p-2'>
          <TouchableOpacity>
            <Image source={{uri:iconesBlock}} className='h-8 w-8'/>
            <Text className='text-lg font-semibold text-wrap'>{texteIndicatif}</Text>
          </TouchableOpacity>
        </View>
    );
}

export default OngletList;
