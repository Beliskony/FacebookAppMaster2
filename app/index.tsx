import ChampPassword from "@/components/loginAndSignIn/ChampPassword";
import ChampsSaisie from "@/components/loginAndSignIn/ChampsSaisie";
import CreerCompte from "@/components/loginAndSignIn/CreerCompte";
import Fbicone from "@/components/loginAndSignIn/Fbicone";
import LoginBouton from "@/components/loginAndSignIn/loginBouton";
import MDPOublier from "@/components/loginAndSignIn/MDPOublier";
import { View } from "react-native";


export default function HomeScreen() {
  return (
    <View className="bg-[#2e2a61] justify-between items-center flex flex-col h-full w-full px-7 py-11">
       <View className="pt-14 w-full items-center">
         <Fbicone></Fbicone>
       </View>
       
       <View className="items-center w-full">
         <ChampsSaisie holder="Telephone ou email"/>
         <ChampPassword></ChampPassword>
         <LoginBouton></LoginBouton>
         <MDPOublier></MDPOublier>
       </View>
       
       <View className="mt-6 w-full">
        <CreerCompte></CreerCompte>

       </View>
      
    </View>
  );
}

