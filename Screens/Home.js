

import React from 'react';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import Icon from 'react-native-ionicons'
import { Appbar } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import BackgroundTask from 'react-native-background-task'
const theme = {
  ...DefaultTheme,
 // roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#42b883',
    // accent: '#f1c40f',
  },
};
// BackgroundTask.define(() => {
//   console.log('Hello from a background task')
//   setTimeout(alert("helloworld"), 10000)
//   BackgroundTask.finish()
// })

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: "",
      Flag:false
    }
  }
  componentDidMount() {
    this.job();
    // BackgroundTask.schedule()
    // this.checkStatus()
  }
  async job(){
    BackgroundTask.define(() => {
      console.log('Hello from a background task')
      BackgroundTask.finish()
    })
}

  // async checkStatus() {
  //   const status = await BackgroundTask.statusAsync()
  //   console.log(status.available)
  // }
  a = () => {
    //call(args).catch(console.error)
    console.log("hello world")
    try
    {
      if(this.state.phoneNumber != "") 
     {
      RNImmediatePhoneCall.immediatePhoneCall(this.state.phoneNumber);
      this.setState({
        Flag:true
      })
      
    }
    else
    {
      alert("Please Enter Your Number")
      this.setState({
        Flag:false
      })
    }

    }
    catch (e)
    {
      alert(e)
    }
  }
  render() {
    if(this.state.Flag === true)
    {
      console.log("If==========")
     setTimeout(this.a.bind(this), 30000);
    }
    else
    {
      console.log("Else==========")
    }
    return (
      <View  style={styles.H}>
            <PaperProvider theme={theme}>
      <Appbar.Header>
     
     <Appbar.Content title="Redial App" subtitle="" color="white" />
      </Appbar.Header> 
      </PaperProvider>
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({ phoneNumber: text })}
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad" />
        <TouchableOpacity onPress={this.a.bind(this)}>
          <Icon ios="ios-call" android="md-call" style={styles.callTxt} />
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-500
  },

  H: {
    flex: 1,
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

