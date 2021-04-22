import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HeaderBackButton = (props) => {
    return (
        <SafeAreaView style={styles.cardEn}>
            <TouchableOpacity
                onPress={() => {
                    if (props.navigation.canGoBack()) {
                        props.navigation.goBack();
                    }

                }}
            >
                <View style={styles.ArrowStyle} >
                    <View>
                        <MaterialIcons name="chevron-left" size={27} color="grey" />
                    </View>
                </View>
            </TouchableOpacity>
            <Text style={styles.TextStyle}>{props.name}</Text>
            <View></View>
        </SafeAreaView>
    )
}
export default HeaderBackButton;

const styles = StyleSheet.create({
    cardEn: {
        backgroundColor: '#0000001a',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        paddingHorizontal: 10
    },
    ArrowStyle: {
        marginRight: 10,
        alignSelf: 'center',
    },
    TextStyle: {
        fontSize: 18,
    },
})