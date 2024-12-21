import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import utilisateurs from '@/data/Utilisateurs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';

const ContenuePublication = () => {
    // États locaux pour gérer les interactions
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null);

    // Gestion des likes
    const handleLike = () => {
        if (reaction === 'like') {
            // Annule le like
            setLikes(likes - 1);
            setReaction(null);
        } else if (reaction === 'dislike') {
            // Change de dislike à like
            setLikes(likes + 1);
            setDislikes(dislikes - 1);
            setReaction('like');
        } else {
            // Ajoute un like
            setLikes(likes + 1);
            setReaction('like');
        }
    };

    // Gestion des dislikes
    const handleDislike = () => {
        if (reaction === 'dislike') {
            // Annule le dislike
            setDislikes(dislikes - 1);
            setReaction(null);
        } else if (reaction === 'like') {
            // Change de like à dislike
            setLikes(likes - 1);
            setDislikes(dislikes + 1);
            setReaction('dislike');
        } else {
            // Ajoute un dislike
            setDislikes(dislikes + 1);
            setReaction('dislike');
        }
    };


    return (
        <>
      {utilisateurs.map((User, index) =>(
        <View key={index} className='flex flex-col my-1 bg-white w-full items-center px-2'>
        {/*en tete*/}
        <View className='flex flex-row justify-between w-full my-2'>
            <View className='flex flex-row'>
                <Image source={{uri: User.photoProfil}} className='h-12 w-12 rounded-full border-[0.5px]'/>
                <View className='flex flex-col justify-center mx-2'>
                   <Text className='font-semibold'>{User.nomComplet}</Text>
                   <View className='flex flex-row w-32 items-center'>
                     <Text className='text-xs text-gray-500 font-semibold mr-2'>6 h</Text>
                     <MaterialIcons name='public' className='h-4 w-4'/>
                   </View>
                </View>
            </View>

            <View className='flex flex-row '>
                <TouchableOpacity className='h-8 w-8'>
                    <MaterialIcons name='keyboard-control' size={26}/>
                </TouchableOpacity>

                <TouchableOpacity className='h-8 w-8 ml-2'>
                    <MaterialIcons name='close' size={26}/>
                </TouchableOpacity>

            </View>


        </View>

        {/*corps ou contenue*/}
        <View className='h-[400px] w-full object-contain my-2'>
           <Image source={{uri: User.imagesPoste}} className='h-[400px] w-full'/>
        </View>

        {/*like, commentaire et partage*/}
        <View className='flex flex-row w-full justify-between py-2'>
            <View className='flex flex-row'>
                <MaterialIcons name='thumb-up' size={20} color={'blue'}/>
                <Text className='text-black mx-1'>{User.likes}</Text>
            </View>

            <View className='flex flex-row'>
              <View className='flex flex-row mx-2'>
                <Text>{User.nombreCommentaire}</Text>
                <Text className='ml-1'>commentaires</Text>
              </View>

              <View className='flex flex-row ml-1'>
                <Text>{User.partages}</Text>
                <Text className='ml-1'>partages</Text>
              </View>
            </View>

        </View>
        
        {/*zone d'interaction*/}
        <View className='flex flex-row w-full justify-around py-1'>
            <TouchableOpacity className='flex flex-row' onPress={handleLike}>
                <MaterialIcons name='thumb-up-off-alt' size={20} color={reaction==='like' ? "blue" : "black"}/>
                <Text className='text-black mx-1'>J'aime</Text>
            </TouchableOpacity>

            <TouchableOpacity className='flex flex-row'>
                <MaterialIcons name='insert-comment' size={20} />
                <Text className='text-black mx-1'>Commenter</Text>
            </TouchableOpacity>

            <TouchableOpacity className='flex flex-row'>
                <MaterialIcons name='copy-all' size={20} />
                <Text className='text-black mx-1'>Copier</Text>
            </TouchableOpacity>

            <TouchableOpacity className='flex flex-row'>
                <MaterialIcons name='share' size={20} />
                <Text className='text-black mx-1'>Partager</Text>
            </TouchableOpacity>
        </View>
    </View>
      ))}  
      
      </>
    );
}


export default ContenuePublication;
