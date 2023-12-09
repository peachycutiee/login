import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Login( { navigation }) {
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
          <View style={{alignItems: 'center', marginBottom: 300}}>

               <Image style={styles.LImage} source={require('../assets/images/cat.jpg')} />
               <Text style={styles.title}>Login</Text>
          
               <View>
                    <TextInput style={styles.input} placeholder='Username' onChangeText={setUsername} value={username}></TextInput>
                    <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} value={password} secureTextEntry={true}></TextInput>
               </View>
          
               <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText} onPress={() => (navigation.replace('Dashboard'))}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
               </View>
          
               <StatusBar style="auto" />
          </View>
       </View>
     );
   }


const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: 'white',
       justifyContent: 'center',
       alignItems: 'center',
     },
     title: {
       fontSize: 24,
       marginBottom: 16,
     },
     input: {
       color: 'black',
       backgroundColor: 'white',
       width: 300,
       height: 40,
       borderColor: 'white',
       borderWidth: 1,
       marginBottom: 4,
       marginTop: 10,
       padding: 10,
       margin: 0,
       borderRadius: 10,
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 4,
       },
       shadowOpacity: 0.32,
       shadowRadius: 5.46,
   
   elevation: 9,
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
       width: 200,
       height: 200,
       borderRadius: 100,
       marginBottom: 10
     },
   });