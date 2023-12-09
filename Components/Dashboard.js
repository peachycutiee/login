import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, ScrollView, Alert, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Name from './Name';


export default function Dashboard() {

     const [name, setName] = useState()
     const [address, setAddress] = useState()
     const [age, setAge] = useState()
     const [info, setInfo] = useState([])

     function addInformation() {
          if (age == null || name == null || age == null) {
               Alert.alert("Please add something", "The desired input are empty")
          }
          else {
               Keyboard.dismiss();
               
               data = {
                    Name: name,
                    Address: address,
                    Age: age
               }

               setInfo([...info, data])
               
               setName(null)
               setAddress(null)
               setAge(null)
               
               console.log(info)
          }
     }

     return (
          <View style={styles.container}>
               <View>
                    <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                         <Text style={styles.title}>Input your Information</Text>
                         <TextInput style={styles.input} placeholder='Full Name' value={name} onChangeText={setName}></TextInput>
                         <TextInput style={styles.input} placeholder='Address' value={address} onChangeText={setAddress}></TextInput>
                         <TextInput style={styles.input} placeholder='Age' value={age} onChangeText={setAge}></TextInput>
                         <TouchableOpacity style={styles.loginButton} onPress={() => (addInformation())}><Text>Submit</Text></TouchableOpacity>
                    </View>

                    {/** Information View */}
                    <View style={styles.information}>
                         <ScrollView>
                              {
                                   info.map((item, key) => {
                                        return <Name name={item.Name} address={item.Address} age={item.Age} key={key}></Name>
                                   })
                              }
                         </ScrollView>
                    </View>
               </View>
          </View>
     )
}


const styles = StyleSheet.create({

     textInformation: {
          marginTop: 20,
          textAlign: 'center', 
          justifyContent:'center', 
          margin: 1, 
          backgroundColor: 'white', 
          borderRadius: 5, 
          padding: 5,
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
     },

     information: {
          flex: 2, 
          textAlign: 'center',
          alignItems: 'center',
          color: 'black', 
          backgroundColor: 'white', 
          marginBottom: 20, 
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
     },

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
       alignItems: 'center',
       color: 'white',
       width: 145,
       height: 40,
       backgroundColor: 'green',
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