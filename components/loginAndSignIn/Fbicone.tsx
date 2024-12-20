import React from 'react';
import { View, Image } from 'react-native';

const Fbicone = () => {
    return (
        <View className='w-24 h-24 mb-20'>
            <Image source={require('../../assets/images/facebook.png')} className='w-24 h-24'/>
        </View>
    );
}


export default Fbicone;
