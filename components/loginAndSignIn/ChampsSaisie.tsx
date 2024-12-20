import React from 'react';
import { View, TextInput } from 'react-native';

interface ChampsSaisieProps{
    holder:string;
}

const ChampsSaisie: React.FC<ChampsSaisieProps> = ({holder}) => {
    return (
        <View className='h-16 w-full border rounded-xl px-4 my-4 border-[#b5b1c4] justify-center'>
            <TextInput placeholder={holder} placeholderTextColor={'#b5b1c4'} className='text-xl'/>
        </View>
    );
}


export default ChampsSaisie;
