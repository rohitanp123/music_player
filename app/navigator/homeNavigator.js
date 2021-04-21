import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Easing } from 'react-native-reanimated';
import HomeScreen from "../screens/homeScreen";

const HomeStackNavigator = createStackNavigator();
const config = {
    animation: 'timing',
    config: {
        duration: 200,
        easing: Easing.linear,
    },
};

const closeConfig = {
    animation: 'timing',
    config: {
        duration: 200,
        easing: Easing.linear,
    },
};

export default ProfileScreenStack = (props) => {
    return (
        <NavigationContainer>
            <HomeStackNavigator.Navigator
                mode="modal"
                initialRouteName="Home"
                animationEnabled={true}
                animation="slide"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    animationEnabled: true,
                    cardStyle: {
                        backgroundColor: 'white',
                    },
                    cardStyleInterpolator: (e) => {
                        const { current, next } = e;
                        let customConfig = CardStyleInterpolators.forHorizontalIOS(e);
                        return customConfig;
                    },
                    transitionSpec: {
                        open: config,
                        close: closeConfig,
                    },
                }}
                lazy={true}
            >
                <HomeStackNavigator.Screen
                    name="Home"
                    component={HomeScreen}
                />

            </HomeStackNavigator.Navigator>
        </NavigationContainer>
    );
};
