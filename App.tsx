import "./global.css";
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { Image } from "expo-image";

SplashScreen.preventAutoHideAsync(); // Prevent splash screen from auto-hiding

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        // Load any required resources or perform tasks here
        await setTimeout(() => {
        }, 5000)
        // Simulate a task (e.g., API call)
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true); // Mark the app as ready
      }
    };

    prepareApp();
    SplashScreen.hideAsync();
  }, []);

  if (!appIsReady) {
    // Render the custom splash screenr
    return (
      <View className="flex-1 flex flex-col justify-center items-center bg-white">
        <Image
          source={require('./assets/projector-gif-splash.gif')}
          style={{
            width: 200,
            height: 200
          }}
          className="flex-1 flex justify-center items-center"
          contentFit="contain"
        />
        <Text className="text-lg font-bold mt-5">Welcome</Text>
        {/* <ActivityIndicator size="large" color="#000f" /> */}
      </View>
    );
  }

  return (
    <View className="flex-1">
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </View>
  );
}