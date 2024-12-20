import React from 'react';
import { View, ScrollView, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import Utilisateur from '@/data/Utilisateurs';

const Story = () => {
    return (
        <ScrollView horizontal>
            {/*story pour CurrentUser*/}
          <TouchableOpacity>
            <ImageBackground source={{uri:('https://i.pinimg.com/736x/f6/57/f2/f657f2d92b7f4f4ad441c97afba51504.jpg')}} 
            className='h-48 w-48 rounded-xl justify-end'>
                <View className='h-2/5 w-full bg-white'>
                   <Text>Creer une story</Text>
                </View>

            </ImageBackground>
          </TouchableOpacity>


          {/*Story pour Amis du User*/}
          <TouchableOpacity>
            <ImageBackground source={{uri:('https://i.pinimg.com/736x/f6/57/f2/f657f2d92b7f4f4ad441c97afba51504.jpg')}} 
            className='h-48 w-48 rounded-xl justify-between'>

            </ImageBackground>
          </TouchableOpacity>

        </ScrollView>
    );
}

export default Story;
