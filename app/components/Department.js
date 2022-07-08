import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Department = (props) =>  {
        const {title, icon} =props;
       
  return (
    <View style={styles.containerStyle}>
      <Text>Department</Text>
    </View>
  )
}
export default Department;

const styles=StyleSheet.create({
    containerStyle:{
        flexDirection:"column", 
        alignItems:"center",
        justifyContent:'space-around',
        width:100,
        height:150,
        backgroundColor: "#85C1E9"
    },
});