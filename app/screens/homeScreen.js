import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { getPlaylistResult } from '../services/playlistSearch';
import { SingleTrackList } from "../component";

const { width, height } = Dimensions.get('window')

const HomeScreen = (props) => {
    const [playlist, setPlaylist] = useState([]);
    const [resultCount, setResultCount] = useState(null);
    useEffect(() => {
        getPlaylistData();
    }, [])
    const getPlaylistData = async () => {
        try {
            let result = await getPlaylistResult();
            if (result) {
                console.log(result)
                setPlaylist(result.results);
                setResultCount(result.resultCount);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const renderItem = ({ item }) => (
        <SingleTrackList
            {...props}
            item={item}
        />
    )
    console.log(playlist, "............")
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Music App</Text>
            </View>
            <FlatList
                contentContainerStyle={styles.flatlistContainer}
                data={playlist}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8"
    },
    header: {
        width: width,
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#e4e4e4",
        backgroundColor: '#fff'
    },
    headerText: {
        fontSize: 18
    },
    flatlistContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})