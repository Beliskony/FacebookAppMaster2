import React,{useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ChoixGenreProps{
    label:string;
    valeur:string;
    selectionner:boolean;
    choix:()=> void;
}

const ChoixGenre: React.FC<ChoixGenreProps> = ({label, valeur, selectionner, choix}) => {
    return (
            <TouchableOpacity className='flex flex-row justify-center items-center mx-3' onPress={choix}>
                <View className={`h-8 w-8 rounded-full border-2 ${selectionner ? 'border-white':'border-black'}
                    flex items-center justify-between`}>
                    {selectionner && <View className='h-5 w-5 bg-white rounded-full m-1 justify-center items-center'/>}
                </View>
                <Text className='mx-2 text-[#b5b1c4] text-lg'>{label}</Text>

            </TouchableOpacity>
            
    );
};



export default ChoixGenre;
