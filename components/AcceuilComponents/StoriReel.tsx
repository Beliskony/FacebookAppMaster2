import React from 'react';
import { View, ScrollView } from 'react-native';
import { useState } from 'react';
import Story from './storyEtReel/Story';
import Reel from './storyEtReel/Reel';

const StoriReel = () => {
    const [selectionOnglet, setSelectionOnglet] = useState(1);

    const choixOnglet = () =>{
        switch (selectionOnglet) {
            case 1:
                return(
                    <Story></Story>

                );
            case 2:
                return(
                  <Reel></Reel>
                );
        
            default:
                return(
                    <Story></Story>
                )
               
        }
    }
    return (
        <View>
            
        </View>
    );
}


export default StoriReel;
