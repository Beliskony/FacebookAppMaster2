import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const AmiHeader = () => {
    return (
        <View className='h-32'>
             <View className="p-4">
          <Text className="text-2xl font-bold mb-4">Ami(e)s</Text>
          
          <View className="flex-row justify-between mb-4">
            <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-full">
              <Text className="font-semibold">Suggestions</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-full">
              <Text className="font-semibold">Vos amis</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
    );
}


export default AmiHeader;
