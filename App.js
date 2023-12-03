import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EECDFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 4,
    marginTop: 10,
    padding: 10,
    margin: 0,
  },
  loginButton: {
    width: 145,
    height: 40,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,
  },
  signupButton: {
    width: 145,
    height: 40,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  LImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // Check if username and password are valid
    // If valid, navigate to the home screen
    // If invalid, display an error message
    console.log('Logging in with:', { username, password });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.LImage} source={{ uri: 'https://drive.google.com/file/d/1eAAZrolO9ALJ0rcMymCXvWLuwKhkDjQZ/view?usp=sharing' }} />
      <Text style={styles.title}>Login</Text>

      <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsername(text)} />
      </View>

      <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center', marginTop: 1 }}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
