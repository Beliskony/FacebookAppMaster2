import ChampPassword from '@/components/loginAndSignIn/ChampPassword';
import ChampsSaisie from '@/components/loginAndSignIn/ChampsSaisie';
import ChoixGenre from '@/components/loginAndSignIn/ChoixGenre';
import Fbicone from '@/components/loginAndSignIn/Fbicone';
import SignInBouton from '@/components/loginAndSignIn/SignInBouton';
import React, {useState}from 'react';
import { View, SafeAreaView } from 'react-native';

export default function SignIn  () {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChoixGenre = (value: string) => {
    setSelectedValue(value);
  };

    return (
        <View className='bg-[#2e2a61] h-full w-full flex flex-col items-center px-7'>
            <View className='mt-16'>
                <Fbicone></Fbicone>
            </View>

            <View className='w-full'>
                <ChampsSaisie holder='Nom De famille'/>
                <ChampsSaisie holder='Prenom'/>
                <ChampsSaisie holder='Telephone'/>

                <View className='flex flex-row justify-center items-center'>
                     <ChoixGenre label='Homme'
                            valeur='Homme'
                            selectionner={selectedValue === 'Homme'}
                            choix={() => handleChoixGenre('Homme')}/>

                     <ChoixGenre label='Femme'
                            valeur='Femme'
                            selectionner={selectedValue === 'Femme'}
                            choix={() => handleChoixGenre('Femme')}/>

                </View>

                <ChampPassword></ChampPassword>
                <SignInBouton></SignInBouton>
                
            </View>

            <View></View>
            
        </View>
    );
};