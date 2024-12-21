import ContenuePublication from "@/components/AcceuilComponents/ContenuePublication";
import FaireUnPoste from "@/components/AcceuilComponents/FaireUnPoste";
import StoriReel from "@/components/AcceuilComponents/StoriReel";
import HeaderApp from "@/components/HeaderApp";
import { SafeAreaView, View, ScrollView } from "react-native";

export default function Acceuil() {
    return(
      <SafeAreaView className="bg-[#dfe3ee] h-full w-full">

          <ScrollView className=" bg-[#dfe3ee] h-full w-full flex flex-col">
            
            <View className=" bg-white h-48 w-full flex flex-col px-2 pt-8">
             <HeaderApp></HeaderApp>
             <FaireUnPoste></FaireUnPoste>
            </View>

            <View className="bg-white mt-2 h-72 flex flex-col px-2 w-full">
                 <StoriReel></StoriReel>
            </View>

            <ScrollView className="bg-[#dfe3ee] mt-2 flex flex-col pt-1">
              
                <ContenuePublication></ContenuePublication>

            </ScrollView>
           
          </ScrollView>
       
        </SafeAreaView>
    )
};