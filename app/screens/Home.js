import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors'
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.ground,opacity:0.8}}>
    <StatusBar translucent={false} opacity={0.8} backgroundColor={COLORS.primary} />
    <View style={styles.header}>
      <Text style={{color:COLORS.white,fontSize:24}} >Davy K </Text>
      <Icon name="more-vert" size={28} color={COLORS.white} />
    </View>
    <View style={styles.banner}>

    <View style={styles.groupbuy}>

    <View style={{flexDirection:'column'}}>
    <Text style={{color:'grey',fontWeight:'bold',padding:3 }}>Group buy </Text>

    <View style={{flexDirection:'row'}}>
    <View style={{backgroundColor:COLORS.green, width:45,marginHorizontal:12, opacity:0.9}}><Text style={{color:COLORS.white,justifyContent: 'center', opacity:0.8, alignItems: 'center',fontSize:20,}}>RWF</Text>
    
    </View>
    <View > 
    <Text style={{fontWeight:'bold'}}>XXXX</Text>
    </View>
    </View>
    </View>
    <View>
    <Icon style={{ marginHorizontal:60}} name="sync-alt" color={'grey'} size={25}></Icon>
    </View>
    <View>
    <Image style={{width:80, height:90, marginRight:10, padding:3}} source={require('../images/QR_code_for_mobile_English_Wikipedia.svg.png')} />
    </View>

      <View style={{backgroundColor:COLORS.ground,position:'absolute',top:80,width:'100%'}}>
       <View style={styles.last}>
        <View>
        <Text style={{fontSize:18,color:'grey',fontWeight:'bold'}}>Last Trans. +xxx</Text>
        
        </View>

        <View style={{marginLeft:50,}}>
        <Image style={{width:60, height:20, }} source={require('../images/visa1.png')} />
        </View>

       </View>

       <View styles={styles.transport}>
         <View style={{flexDirection:'row', justifyContent:'flex-start', top:11, }}>
         <Icon name="more-vert" size={28} color='grey' style={{marginLeft:12}} />
         <Text style={{fontSize:20}}>Transport</Text>
         <Icon style={{marginLeft:4}}name="remove-red-eye" size={28}  color='grey' />
         <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:120}}>
        
          <Icon name="people" size={28} color='grey'/>
         <Icon name="more-vert" size={28} color='grey'/>
         
        
         </View>
         </View>
       </View>
      </View>

    </View>
  
    </View>
    <View style={styles.plus}>
    <Icon name="more-vert" size={28} color='grey'/>
    </View>
    
  </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    header: {
        height:150,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
       
        
      },

      banner:{
        position:'absolute',
        backgroundColor:COLORS.grey,
        elevation: 3,
        width:'93%',
        height:'30%',
        top:70,
        marginHorizontal:15,
        zIndex: 0,
        borderRadius:7,
        
        
      },
      groupbuy:{
        flexDirection:'row',
        justifyContent:'space-between',
      },
      last:{
        flexDirection:'row',
        justifyContent:'flex-start',
        padding: 3,
        marginLeft: 14,
      },
   transport:{
    flexDirection:'row',
    justifyContent:'space-between'
    
  },   

})
export default Home