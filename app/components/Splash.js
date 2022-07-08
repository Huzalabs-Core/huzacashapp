import React from 'react'
import {Text, View, StatusBar, Image, } from 'react-native';
import COLORS from '../consts/colors';
const Splash = ({navigation}) =>{
    setTimeout(()=>{
        navigation.replace('Welcome')
    },3000)
    
    return(

        <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:COLORS.ground}}>
       <Image style={{width:130, height:80}} source={require('../images/logo.png')}/>
       <Text style={{fontSize:22, top:9,color:COLORS.green,paddingRight:16}}>HUZA BUY</Text>
        </View>

    )}

export default Splash;