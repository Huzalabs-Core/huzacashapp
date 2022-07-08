import { View, Text, StatusBar, TouchableOpacity, StyleSheet, TextInput, Image, Button } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'; 
const Login = ({navigation}) => {
  return (
    
    <View style={{flex:1, backgroundColor:'##E6E2DD'}}>
  
    <View style={styles.header}>
        <Text style={{color:COLORS.primary, fontWeight: 'bold', justifyContent:'center', textAlign:'center',fontSize:23,}}>Login into Huza Buy</Text>
        <Image style={{width:120, height:80, top:30, marginLeft:'35%'}} source={require('../images/logo.png')} />
    </View>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
       {/* <View style={styles.InputContainer}> */}
      <View style={styles.InputContainer}>
        
      <View style={{top:20}}>
      <TextInput style={styles.input}
        placeholder="Enter Email"
        
      />
      </View>
      <View style={{top:40}}>
      <TextInput style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        returnKeyType='go'
        autoCorrect={false}
      />
      </View>
      
      </View>
      <TouchableOpacity
            activeOpacity={0.8}
            
            onPress={() => navigation.navigate('Home')}
            >
            <View style={styles.btn}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:19}}>Login</Text>
            </View>
          </TouchableOpacity>
       
      <View style={{top:3,padding:20, backgroundColor:COLORS.white, flexDirection:'row', alignItems:'space-between'}}>
      <Text>If you Don't have Account </Text>
      <Text style={{color:COLORS.green, fontSize:16,fontWeight:'bold'}}
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      > Signup</Text>
      <Text  style={{color:COLORS.primary, marginLeft:10, fontWeight:'bold',fontStyle:'italic'}} onPress={() => navigation.navigate('ForgetPassword')}>Forget Password</Text>
      </View>
    </View>
   
  )
}

const styles=StyleSheet.create({
    InputContainer:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        marginTop:20, 
        padding:30, 
        borderRadius:20,
    },
    btn:{
        height: 40,
        width: 100,
        backgroundColor: COLORS.primary,
        marginTop: 30,
        borderRadius: 7,
        
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        
        backgroundColor:'#E1E2E2',
         color:COLORS.primary, 
         borderRadius:7,
         borderWidth:1,
         borderColor:COLORS.primary,
         height:50,
         padding:10
         
    },
    header:{
        marginTop:70,
        fontWeight:'bold',
        


    },
})
export default Login