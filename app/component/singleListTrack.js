import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SingleTrackList = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={() => navigation.navigate('Desc', {
                item: item
            })}>
            <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.playButton}>
                    <MaterialIcons name="play-circle-outline" size={30} color="#fff" />
                </TouchableOpacity>
                <Image source={{ uri: item.artworkUrl100 }} style={styles.imageView} />
            </View>
            <View style={styles.rightTouchView}>
                <Text>{item.trackName}</Text>
                <Text style={styles.subText}>{item.artistName} - ({item.primaryGenreName})</Text>
                <Text style={styles.subText2}>{item.collectionName}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default SingleTrackList;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 7,
        overflow: "hidden"
    },
    imageView: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    rightTouchView: {
        marginLeft: 10
    },
    subText: {
        color: 'grey',
        fontSize: 13
    },
    subText2: {
        color: 'grey',
        fontSize: 12
    },
    playButton: {
        position: 'absolute',
        zIndex: 9,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#00000061",
        borderRadius: 10
    }
})