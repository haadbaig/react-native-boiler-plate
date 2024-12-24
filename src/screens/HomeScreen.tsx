import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { auth } from '../config/firebase';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const handleLogout = async () => {
    await auth.signOut();
    navigation.replace('Login'); // Navigate to Login screen
  };

  return (
    <View className='px-10 flex-1 flex flex-col justify-center items-center gap-y-2'>
      <View className='flex flex-col justify-center items-center gap-y-3'>
        <Text className='text-lg font-medium'>Coming Soon!</Text>
        <Pressable className='p-5 rounded bg-slate-500 w-36' onPress={() => navigation.navigate('Details')}>
          <Text className='text-white text-center'>Go to Details</Text>
        </Pressable>
      </View>
      <View className=''>
        <Pressable className='p-5 rounded bg-black w-36' onPress={handleLogout}>
          <Text className='text-white text-center'>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
