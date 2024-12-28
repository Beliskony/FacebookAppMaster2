import AmiHeader from "@/components/amiPage/AmiHeader";
import ListeDemande from "@/components/amiPage/ListeDemande";
import { View, SafeAreaView, ScrollView } from "react-native";

export default function Amie() {
    return(
        <SafeAreaView className="bg-white h-full w-full pt-10">
            <View className="w-full px-3">
                <AmiHeader></AmiHeader>
            </View>

            <ScrollView className="h-full w-full px-3">
                 <ListeDemande></ListeDemande>
            </ScrollView>

        </SafeAreaView>
    )
};