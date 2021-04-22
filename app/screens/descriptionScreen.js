import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native";

const { width, height } = Dimensions.get('window')

const DescriptionScreen = (props) => {
    const { item } = props.route.params;
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.backgroundWall}></View>
                <View style={styles.topSection}>
                    <Text style={styles.headingText}>{item.trackName}</Text>
                    <Text style={styles.subText}>{item.artistName}</Text>
                    <Image
                        source={{ uri: item.artworkUrl100 }}
                        style={styles.imageView}
                    />

                </View>
                <View style={styles.bottomSection}>

                    <Text style={styles.noramlText}><Text style={styles.boldNoramlText}>Length: </Text>{(item.trackTimeMillis/60000).toFixed(2)} mins</Text>
                    <Text style={styles.noramlText}><Text style={styles.boldNoramlText}>Collection: </Text>{item.collectionName}</Text>
                    <Text style={styles.noramlText}><Text style={styles.boldNoramlText}>Released on: </Text>{new Date(item.releaseDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'numeric', day: 'numeric' })}</Text>
                    <Text style={styles.noramlText}><Text style={styles.boldNoramlText}>Type: </Text>{item.kind}</Text>
                    <Text style={styles.noramlText}><Text style={styles.boldNoramlText}>Genere: </Text>{item.primaryGenreName}</Text>
                    <Text style={styles.noramlText}><Text style={styles.boldNoramlText}>Price: </Text>${item.collectionPrice}</Text>
                    {item.description && <Text style={styles.noramlText}><Text style={styles.boldNoramlText}>Description: </Text>{item.description}</Text>}
                </View>
            </ScrollView>
        </View>
    )
}
export default DescriptionScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d4d1d16e",
    },
    backgroundWall: {
        backgroundColor: "#56472e8a",
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: 200,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    topSection: {
        alignItems: 'center',
        paddingVertical: 30,
        width: width / 2,
        alignSelf: "center"
    },
    headingText: {
        fontSize: 20,
        color: '#fff'
    },
    subText: {
        color: "#fff"
    },
    imageView: {
        width: 150,
        height: 150,
        marginTop: 25,
        borderRadius: 15
    },
    bottomSection: {
        paddingHorizontal: 10
    },
    boldNoramlText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    noramlText: {
        fontSize: 16
    }
})