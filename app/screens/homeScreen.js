import React, { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import { getPlaylistResult } from '../services/playlistSearch';

const HomeScreen = () => {
    const [playlist, setPlaylist] = useState([]);
    const [resultCount, setResultCount] = useState(null);
    useEffect(() => {
        getPlaylistData();
    }, [])
    const getPlaylistData = async () => {
        try {
            let result = await getPlaylistResult();
            if (result) {
                setPlaylist(result.results);
                setResultCount(result.resultCount);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}
export default HomeScreen;