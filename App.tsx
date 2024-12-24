import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync(); // Prevent splash screen from auto-hiding

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);


  useEffect(() => {
    const prepareApp = async () => {
      try {
        // Load any required resources or perform tasks here
        await setTimeout(() => {
          console.log("LOGGER---------")
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

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // Hide the splash screen once the app is ready
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  if (!appIsReady) {
    // Render the custom splash screenr
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Welcome to T Stop PRO</Text>
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Match the background color from app.json
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loader: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});