import React from 'react';
import { View, ScrollView, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import utilisateurs from '@/data/Utilisateurs';

const Story = () => {
    return (
        <ScrollView horizontal className='w-full space-x-4'>
            {/*story pour CurrentUser*/}
          <TouchableOpacity className='h-72 ml-2'>
            <ImageBackground source={{uri:('https://i.pinimg.com/736x/f6/57/f2/f657f2d92b7f4f4ad441c97afba51504.jpg')}} 
            className='h-60 w-36 rounded-xl justify-end mx-4 border-[0.5px] overflow-hidden '>
                <View className='h-1/4 w-full bg-white items-center justify-end'>
                   <Text className='text-wrap text-black  text-2xl text-center w-36'>Creer une story</Text>
                </View>

            </ImageBackground>
          </TouchableOpacity>


           {/* Stories pour Amis du User */}
           
           {utilisateurs.map((user, index) => (
                <TouchableOpacity key={index} className='mx-1 h-72 w-36'>
                    <ImageBackground 
                        source={{ uri: user.imagesPoste}} 
                        className='h-60 w-36 rounded-xl justify-between overflow-hidden'>

                        {/* Image de profil */}
                        <View className='m-2'>
                            <Image 
                                source={{ uri: user.photoProfil}} 
                                className='h-10 w-10 rounded-full bg-white'/>
                        </View>

                        {/* Nom de l'utilisateur */}
                        <View className='py-1'>
                            <Text className='text-white text-center text-wrap font-bold'>{user.nomComplet}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            ))}

        </ScrollView>
    );
}

export default Story;
