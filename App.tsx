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
      <View className="flex-1 flex flex-col justify-center items-center bg-slate">
        <Image
          source={require('./assets/projector-gif-splash.gif')}
          className="flex-1 flex justify-center items-center w-96 h-96"
          contentFit="contain"
        />
        <Text>Welcome to T Stop Pro</Text>
        {/* <ActivityIndicator size="large" color="#0000ff" /> */}
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