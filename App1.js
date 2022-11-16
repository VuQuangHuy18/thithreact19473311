import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const App1 = ({navigation}) => {
  return (
    <View style={styles.container}>

        <View style={styles.top}>
           <Image style={styles.img} source={require('./assets/xadaphome.png')} />
           
        </View>
        <View style={styles.bot}>

        <Text style={{marginTop:5}}>Welcome to</Text>
           <Text style={{fontWeight:"bold"}}>Power Bike Shop</Text>


           <View style={{marginTop:30}}>
          <TouchableOpacity
          onPress={()=> navigation.navigate('App 2')}
          >
          <Text style={{backgroundColor:'gray',color:'#000',width:300,borderRadius:3}}> Login with email</Text>
           <Text style={{backgroundColor:'black',color:'#fff',borderRadius:3,marginTop:10}}> Login with Apple</Text>

          </TouchableOpacity>
           
           
           <View style={{flexDirection:'row', margin:30}}>

            <Text>Not a member ?  </Text>
            <Text style={{color:"orange"}}>Sign up</Text>

           </View>
           </View>
        </View>
      
    </View>
  )
}

export default App1

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    top:{
        flex:3,
       
        justifyContent:"center",
        alignItems:'center'
    },
    bot:{
        flex:2, 
        alignItems:'center'

    },
    img:{
        width:"70%",
        height:"70%",
        borderRadius:30,
        transform: [{ rotate: "-45deg" }]
    }
})