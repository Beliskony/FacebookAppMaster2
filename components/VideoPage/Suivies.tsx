import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import utilisateurs from '@/data/Utilisateurs';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';

const Suivies = () => {
    return (
        <>
        {utilisateurs.map((User, index) => {
            const player = useVideoPlayer(User.videoPoste ||"", player => {
                player.loop = true;
                player.play();
            });
            const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

            return (
                <View key={index} className="flex flex-col my-1 bg-white w-full items-center px-2">
                    {/* En-tête */}
                    <View className="flex flex-row justify-between w-full my-2">
                        <View className="flex flex-row">
                            <Image source={{ uri: User.photoProfil }} className="h-12 w-12 rounded-full border-[0.5px]" />
                            <View className="flex flex-col justify-center mx-2">
                                <Text className="font-semibold">{User.nomComplet}</Text>
                                <View className="flex flex-row w-32 items-center">
                                    <Text className="text-xs text-gray-500 font-semibold mr-2">6 h</Text>
                                    <MaterialIcons name="public" className="h-4 w-4" />
                                </View>
                            </View>
                        </View>

                        <View className="flex flex-row">
                            <TouchableOpacity className="h-8 w-8">
                                <MaterialIcons name="keyboard-control" size={26} />
                            </TouchableOpacity>

                            <TouchableOpacity className="h-8 w-8 ml-2">
                                <MaterialIcons name="close" size={26} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Corps ou contenu */}
                    <VideoView
                        player={player}
                        allowsFullscreen
                        allowsPictureInPicture
                        style={{ width: 300, height: 450 }}
                    />

                    {/* Like, commentaire et partage */}
                    <View className="flex flex-row w-full justify-between py-2">
                        <View className="flex flex-row">
                            <MaterialIcons name="thumb-up" size={20} color={'blue'} />
                            <Text className="text-black mx-1">{User.likes}</Text>
                        </View>

                        <View className="flex flex-row">
                            <View className="flex flex-row mx-2">
                                <Text>{User.nombreCommentaire}</Text>
                                <Text className="ml-1">commentaires</Text>
                            </View>

                            <View className="flex flex-row ml-1">
                                <Text>{User.partages}</Text>
                                <Text className="ml-1">partages</Text>
                            </View>
                        </View>
                    </View>

                    {/* Zone d'interaction */}
                    <View className="flex flex-row w-full justify-around py-1">
                        <TouchableOpacity className="flex flex-row">
                            <MaterialIcons name="thumb-up-off-alt" size={20} />
                            <Text className="text-black mx-1">J'aime</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex flex-row">
                            <MaterialIcons name="insert-comment" size={20} />
                            <Text className="text-black mx-1">Commenter</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex flex-row">
                            <MaterialIcons name="copy-all" size={20} />
                            <Text className="text-black mx-1">Copier</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex flex-row">
                            <MaterialIcons name="share" size={20} />
                            <Text className="text-black mx-1">Partager</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        })}
    </>
    );
}

export default Suivies;
