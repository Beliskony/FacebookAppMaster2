import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import pagesgroupe from '@/data/PagesGroupes';


const Raccourcis = () => {
    return (
        <View className='h-52 w-full mx-2 px-2 flex flex-col my-2'>
            <View>
                <Text className='text-lg font-normal text-black'>Vos raccourcis</Text>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className='flex flex-row my-2'>
                    {pagesgroupe.map((pagesgroupe) =>(
                        <TouchableOpacity key={pagesgroupe.id} className='mx-2 items-center justify-center'>
                         <View className='flex flex-col'>
                           <Image source={{uri:pagesgroupe.photoAvant}} className='h-20 w-20 rounded-2xl object-cover'/>
                           <Image source={{uri:pagesgroupe.iconess}} className='h-6 w-6 rounded-full absolute inset-[60px] bg-white'/>
                           
                         </View>
                         <View className=' w-20 h-14 mt-2'>
                           <Text className='text-sm text-center text-wrap'>
                            {pagesgroupe.nomPage}
                           </Text>
                         </View>
                        </TouchableOpacity>
                    ))}

                </View>
            </ScrollView>
            
        </View>
    );
}

export default Raccourcis;
