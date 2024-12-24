import React, {useState} from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import PourVous from './PourVous';
import EnDirect from './EnDirect';
import Reels from './Reels';
import Suivies from './Suivies';

const HeaderVideo = () => {
    const [selectionOnglet, setSelectionOnglet] = useState(1);

    
    const choixOnglet = () => {
        switch (selectionOnglet) {
            case 1:
                return <PourVous/>;
            case 2:
                return <EnDirect/>;
            case 3:
                return <Reels/>;
            case 4:
                return <Suivies/>;
            default:
                return <PourVous/>;
        }
    };
    return (
        <View className='flex flex-col w-full h-full justify-start items-center pt-10'>
          <View className='flex flex-row w-full h-20 justify-between items-center'>
            <View className='h-24 w-48 justify-center'>
                <Text className='text-black text-4xl font-bold'>Video</Text>
            </View>

            <View className='flex flex-row'>
                 <TouchableOpacity className='justify-center items-center bg-[#b5b1c4] rounded-full p-1'>
                    <MaterialIcons name='people' size={32}/>
                 </TouchableOpacity>

                 <TouchableOpacity className='justify-center items-center bg-[#b5b1c4] rounded-full mx-2 p-1'>
                    <MaterialIcons name='search' size={32}/>
                 </TouchableOpacity>
            </View>
         </View>

         <View className=' flex flex-row h-14 w-full items-center'>
             {/* Onglets de navigation */}
                        <View className="h-14 flex flex-row justify-start w-full mx-2">
                            {/* Pour Vous*/}
                            <TouchableOpacity
                                onPress={() => setSelectionOnglet(1)}
                                className={`w-1/4 items-center justify-center mb-2 mx-2 ${
                                    selectionOnglet === 1 ? 'bg-blue-400 opacity-55 rounded-2xl py-2' : 'border-b-0'
                                }`}
                            >
                                <Text
                                    className={`text-xl font-bold ${
                                        selectionOnglet === 1 ? 'text-blue-600' : 'text-black'
                                    }`}
                                >
                                    Pour Vous
                                </Text>
                            </TouchableOpacity>

                            {/*onglet direct*/}
                            <TouchableOpacity
                                onPress={() => setSelectionOnglet(2)}
                                className={` w-1/4 items-center justify-center mb-2 ${
                                    selectionOnglet === 2 ? 'bg-blue-400 opacity-55 rounded-2xl py-2' : 'border-b-0'
                                }`}
                            >
                                <Text
                                    className={`text-xl font-bold ${
                                        selectionOnglet === 2 ? 'text-blue-600' : 'text-black'
                                    }`}
                                >
                                    En direct
                                </Text>
                            </TouchableOpacity>
            
                            {/* Onglet Reel */}
                            <TouchableOpacity
                                onPress={() => setSelectionOnglet(3)}
                                className={` w-1/4 items-center justify-center mb-2 ${
                                    selectionOnglet === 3 ? 'bg-blue-400 opacity-55 rounded-2xl py-2' : 'border-b-0'
                                }`}
                            >
                                <Text
                                    className={`text-xl font-bold ${
                                        selectionOnglet === 3 ? 'text-blue-600' : 'text-black'
                                    }`}
                                >
                                    Reel
                                </Text>
                            </TouchableOpacity>

                            {/*onglet suivie*/}
                            <TouchableOpacity
                                onPress={() => setSelectionOnglet(4)}
                                className={` w-1/4 items-center justify-center mb-2 ${
                                    selectionOnglet === 4 ? 'bg-blue-400 opacity-55 rounded-2xl py-2' : 'border-b-0'
                                }`}
                            >
                                <Text
                                    className={`text-xl font-bold ${
                                        selectionOnglet === 4 ? 'text-blue-600' : 'text-black'
                                    }`}
                                >
                                    Suivi(e)s
                                </Text>
                            </TouchableOpacity>
                        </View>

         </View>
         {/* Contenu de l'onglet actif */}
         <View className="flex-1 h-full w-full">{choixOnglet()}</View>
        </View>

    );
}

export default HeaderVideo;
