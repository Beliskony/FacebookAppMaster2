import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import friends from '@/data/Friends';
import suggestionFriends from '@/data/SuggestionFriends';


const ListeDemande = () => {
    return (
     <View>   
        <View className='mb-6'>
            <Text className='text-lg font-semibold mb-2'>Demandes d'amis</Text>
            <ScrollView>
               {friends.map((user) => (
                  <View key={user.id} className="flex-row items-center mb-4">
                    <Image source={{uri: user.photo}} className='w-16 h-16 rounded-full mr-4'/>
                    <View className="flex-1 w-full">
                  <Text className="font-semibold">{user.nomComplet}</Text>
                  <Text className="text-gray-500"> 5 amis en commun</Text>
                  <View className="flex-row mt-2 w-full">
                    <TouchableOpacity className="bg-blue-500 w-32 px-4 py-2 rounded-md mr-2">
                      <Text className="text-white font-semibold text-center">Confirmer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-300 w-32 px-4 py-2 rounded-md">
                      <Text className="font-semibold text-center">Supprimer</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                </View>
               ))}
            </ScrollView>
        </View>


        <View>
             <Text className='text-lg font-semibold mb-2'>Suggestions d'amis</Text>
             {suggestionFriends.map((user) => (
               <View key={user.id} className="flex-row items-center mb-4">
               <Image source={{ uri: user.photoProfil }} className="w-16 h-16 rounded-full mr-4" />
               <View className="flex-1">
                 <Text className="font-semibold">{user.nomSug}</Text>
                 <Text className="text-gray-500">{user.commun} amis en commun</Text>
                 <View className="flex-row mt-2">
                   <TouchableOpacity className="bg-blue-500 w-32 px-4 py-2 rounded-md mr-2">
                     <Text className="text-white font-semibold text-center">Ajouter</Text>
                   </TouchableOpacity>
                   <TouchableOpacity className="bg-gray-300 w-32 px-4 py-2 rounded-md">
                     <Text className="font-semibold text-center">Supprimer</Text>
                   </TouchableOpacity>
                 </View>
               </View>
             </View>
              ))}
        </View>
     </View>
    );
}


export default ListeDemande;
