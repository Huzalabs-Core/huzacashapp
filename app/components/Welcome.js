import { View, Text, StatusBar, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'; 
const Welcome = ({navigation}) => {
  return (

      <View style={{flex:1, backgroundColor:'#C1FFFB'}}>
         <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
         <View style={{flex:3, flexDirection:'column', }}>
            <ImageBackground style={{flex:1, width:'100%', padding:2}} source={require('../images/Consumer-Buying-Behavior-1280x720.png')} />
         </View>
        <View style={{flex:2, }}>
        <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'center',}}>
            <Text style={{fontFamily:'Roboto', color:'#000',fontSize:30,  }}>Welcome to HUZA BUY</Text>
            <Text style={{maxWidth:'50%', fontFamily:'Roboto',color:'#999', fontSize:14, textAlign:'center', paddingTop:10,}}>All new in one place,  be the first to know the last new</Text>
        </View>
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end',alignItems:'center'}}>

            <TouchableOpacity style={{justifyContent:'center',width:'70%',backgroundColor:COLORS.green, height:50, marginBottom:43, borderRadius:35}} onPress ={() =>navigation.navigate('Login')}>
                <Text style={{fontSize:20, letterSpacing:1.5,textAlign:'center', position:'relative',fontFamily:'', color:'white',}}>Get Started</Text>
            </TouchableOpacity>
            </View>
        </View>
       </View>
   
  )
}

const styles=StyleSheet.create({
    InputContainer:{
        
    },
  
    
})
export default Welcome