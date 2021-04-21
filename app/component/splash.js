import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Splash = () => {
    return (
        <View style={styles.SplashScreen_RootView}>
            <View style={styles.SplashScreen_ChildView}>
                <Image source={require("../../assets/images/logo.jpg")}
                    style={styles.splash_image} />
            </View>
        </View>
    )
}
export default Splash;
const styles = StyleSheet.create({
    SplashScreen_RootView: {
      flex: 1
    },
    SplashScreen_ChildView: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      flex: 1,
    },
    splash_image: {
      width: width,
      height: height,
      resizeMode: 'contain'
    }
  })