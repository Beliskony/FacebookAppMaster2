import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Story from './storyEtReel/Story';
import Reel from './storyEtReel/Reel';

const StoriReel = () => {
    const [selectionOnglet, setSelectionOnglet] = useState(1);

    // Fonction pour choisir le contenu selon l'onglet actif
    const choixOnglet = () => {
        switch (selectionOnglet) {
            case 1:
                return <Story />;
            case 2:
                return <Reel />;
            default:
                return <Story />;
        }
    };

    return (
        <View className="h-80 w-full">
            {/* Onglets de navigation */}
            <View className="flex flex-row justify-between w-full mx-2">
                {/* Onglet Story */}
                <TouchableOpacity
                    onPress={() => setSelectionOnglet(1)}
                    className={`w-2/4 items-center justify-center mb-2 ${
                        selectionOnglet === 1 ? 'border-b-2 border-blue-600' : 'border-b-0'
                    }`}
                >
                    <Text
                        className={`text-xl font-bold ${
                            selectionOnglet === 1 ? 'text-blue-600' : 'text-black'
                        }`}
                    >
                        Story
                    </Text>
                </TouchableOpacity>

                {/* Onglet Reel */}
                <TouchableOpacity
                    onPress={() => setSelectionOnglet(2)}
                    className={` w-2/4 items-center justify-center mb-2 ${
                        selectionOnglet === 2 ? 'border-b-2 border-blue-600' : 'border-b-0'
                    }`}
                >
                    <Text
                        className={`text-xl font-bold ${
                            selectionOnglet === 2 ? 'text-blue-600' : 'text-black'
                        }`}
                    >
                        Reel
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Contenu de l'onglet actif */}
            <View className="flex-1">{choixOnglet()}</View>
        </View>
    );
};

export default StoriReel;
