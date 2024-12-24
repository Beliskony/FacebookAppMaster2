import HeaderVideo from "@/components/VideoPage/HeaderVideo";
import { View, SafeAreaView, ScrollView } from "react-native";


export default function VideoS() {
    return(
        <SafeAreaView className="h-full w-full">
          <ScrollView className=" bg-[#dfe3ee] h-full w-full flex flex-col">
            <View className=" bg-white h-full w-full flex flex-col px-2 pt-8">
                <HeaderVideo></HeaderVideo>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}