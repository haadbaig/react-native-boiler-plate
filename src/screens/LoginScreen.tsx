import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigation.navigate('Home'); // Navigate to Home on successful login
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home'); // Navigate to Home on successful signup
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-4">Login</Text>
      {error ? <Text className="text-red-500 mb-4">{error}</Text> : null}
      <TextInput
        className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View className="w-full mb-4">
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View className='flex flex-row justify-center items-center gap-x-2'>
        <Text className="text-center">Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text className="text-blue-500 text-center">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}; 

export default LoginScreen;