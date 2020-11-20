

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  Header
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from 'react-navigation-stack';
import Home from "./Screens/Home"
import { Appbar } from 'react-native-paper';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>   
//   );
// }
// const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }





  render() {

     return (         
      <View style={styles.container}>
   
       

        <Home/> 
       </View>
      
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
 
    
  },
  input: {
    borderColor: "#000011",
    borderWidth: 2,
    width: 350,
    borderRadius: 20,
    fontSize: 30,
    color: "#000",
    marginBottom: 20,
  },
  callTxt: {
    backgroundColor: "#42b883",
    padding: 10,
    borderRadius: 30,
    width: 80,
    textAlign: "center",
    color: "#fff",
    fontSize: 30
  }
});

