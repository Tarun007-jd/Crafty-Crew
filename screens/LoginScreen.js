// screens/LoginScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate credentials here (e.g. API call)
    // If successful, navigate to Home
    navigation.replace('Home');
  };

  const handleSignUp = () => {
    // Navigate to Home screen for now (or implement SignUp screen)
    navigation.navigate('Home');
  };

  const handleForgot = () => {
    // Navigate to Settings screen for password recovery options
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.inner}>
        <Image
              source={require('../assets/Logo.png')}
              style={styles.logoImage}
                  />
          
        <Text style={styles.title}>SIGN Learning App</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#999"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handleForgot}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View style={styles.signUpRow}>
          <Text style={styles.noAccount}>Don’t have account yet?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUp}> Sign Up</Text>
          </TouchableOpacity>
            </View>
            <Image source={require('../assets/dragon.png')} style={styles.image} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF4EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: '85%',
    alignItems: 'center',
  },
   logoImage: {
  position: 'absolute',
  top: 10,           // adjust as needed
  left: 20,          // adjust as needed
  width: 50,         // diameter of circle
  height: 50,        // diameter of circle
  borderRadius: 25,  // half of width/height for perfect circle
  borderWidth: 2,    // optional: border around circle
  borderColor: 'white',
  resizeMode: 'cover'
},
  title: {
    top: 15,
    paddingLeft: 50,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F49F26',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  forgot: {
    alignSelf: 'flex-end',
    color: '#333',
    marginBottom: 30,
    fontSize: 14,
  },
  button: {
    width: '100%',
    backgroundColor: '#F49F26',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noAccount: {
    color: '#333',
    fontSize: 14,
  },
  signUp: {
    justifyContent: 'center',
    color: '#3BB77E',
    fontSize: 14,
    fontWeight: 'bold',},

    image: { 
        width: 220,
         height: 150,
          marginTop: 40,
          borderRadius:100,
         },

});
