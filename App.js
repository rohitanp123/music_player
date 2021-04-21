import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Application from './app/app';
import { Splash } from "./app/component";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      Hide_Splash_Screen();
    }, 2000);
  }, [])
  const Hide_Splash_Screen = () => {
    setIsVisible(false)
  }
  return (
    <>
      {isVisible ? <Splash /> :
        <Application />
      }
    </>
  )
}

export default App;
