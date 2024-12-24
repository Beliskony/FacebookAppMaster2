import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import Reel from '../AcceuilComponents/storyEtReel/Reel';
import utilisateurs from '@/data/Utilisateurs';


const Reels = () => {
    return (
     <ScrollView className='bg-white h-full w-full space-x-4'>
        {/*story pour CurrentUser*/}
      <TouchableOpacity className='h-60 ml-2 bg-[#da530f] rounded-xl justify-center items-center'>
               
               <View className='h-16 w-16 rounded-full bg-white justify-center items-center'>
                  <Image source={{uri:('https://img.icons8.com/?size=100&id=I9dgTnSStxos&format=png&color=FD7E14')}} className='h-10 w-10 object-cover'/>
               </View>
               <Text className='text-wrap items-center text-white text-xl  text-center w-36'>Creer un reel</Text>       
      </TouchableOpacity>


       {/* Stories pour Amis du User */}
       
       {utilisateurs.map((user, index) => (
            <TouchableOpacity key={index} className='mx-1 h-[400px] w-full my-3'>
                <ImageBackground 
                    source={{ uri: user.imagesPoste}} 
                    className='h-full w-full rounded-xl justify-between overflow-hidden'>

                    {/* Image de profil */}
                    <View className='m-2'>
                        <Image 
                            source={{ uri: user.photoProfil}} 
                            className='h-20 w-20 rounded-full bg-white'/>
                    </View>

                    {/* Nom de l'utilisateur */}
                    <View className='py-1'>
                        <Text className='text-white text-2xl text-center text-wrap font-bold'>{user.nomComplet}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        ))}
        </ScrollView>
    );
}


export default Reels;
