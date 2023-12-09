import { Text, View, StyleSheet } from 'react-native';


function Name(props) {
     return (
          <View style={style.textInformation}>
               <Text>Name: {props.name}</Text>
               <Text>Address: {props.address}</Text>
               <Text>Age: {props.age}</Text>
          </View>
     );
}

const style = StyleSheet.create({
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
})


export default Name;