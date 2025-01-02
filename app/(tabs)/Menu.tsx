import MenuHeader from "@/components/menuPage/MenuHeader";
import OngletList from "@/components/menuPage/OngletList";
import Raccourcis from "@/components/menuPage/Raccourcis";
import ZoneInfo from "@/components/menuPage/ZoneInfo";
import { View, SafeAreaView, ScrollView } from "react-native";

export default function Menu() {
  return(
    <SafeAreaView className="bg-[#dfe3ee] h-full w-full">
        <ScrollView className="bg-[#dfe3ee] h-full w-full my-1">
            <View className="w-full flex flex-col px-2">
               <MenuHeader></MenuHeader>
               <ZoneInfo imagePro="https://i.pinimg.com/474x/8e/71/25/8e71254c516399d90325aa44aebbf973.jpg"
                         nomProfil="Mignon Rush Grouuu"
                         photoPages="https://i.pinimg.com/474x/f7/bc/25/f7bc25af84a335d917708ec8be95eecd.jpg"/>
            </View>

            <View className="w-full mt-2 flex flex-col">
                <Raccourcis></Raccourcis>
            </View>
            
            <View className="w-full space-x-2 space-y-2 justify-center items-center flex flex-col">

                <View className="flex flex-row">
                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=K7ebDTcbruY8&format=png&color=000000"
                                 texteIndicatif="Ami(e)s" />

                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=gBwsNxSEQ7bl&format=png&color=000000"
                                 texteIndicatif="Tableau de bord professionnel"/>
                </View>


                <View className="flex flex-row">
                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=119200&format=png&color=000000"
                                 texteIndicatif="Fils" />

                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=qdiD1wZOvDsv&format=png&color=000000"
                                 texteIndicatif="Groupes" />
                </View>

                <View className="flex flex-row">
                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=ISvzi43_6Fxs&format=png&color=9A0C55"
                                 texteIndicatif="Marketplace" />

                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=XWmoXwHQeG4o&format=png&color=000000"
                                 texteIndicatif="Video" />
                </View>

                <View className="flex flex-row">
                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=3nFgfC3TB75s&format=png&color=000000"
                                 texteIndicatif="Souvenir" />

                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=26083&format=png&color=9A0C55"
                                 texteIndicatif="Enregistrement" />
                </View>

                <View className="flex flex-row">
                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=7819&format=png&color=0850AA"
                                 texteIndicatif="Assistance pour les Creators" />

                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=12381&format=png&color=000000"
                                 texteIndicatif="Espace Pubs" />
                </View>

                <View className="flex flex-row">
                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=lwFYJnvBsAbl&format=png&color=000000"
                                 texteIndicatif="Pages" />

                     <OngletList iconesBlock="https://img.icons8.com/?size=100&id=I9dgTnSStxos&format=png&color=FD7E14"
                                 texteIndicatif="Reels" />
                </View>

            </View>


        </ScrollView>
    </SafeAreaView>
 );
}