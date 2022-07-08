import { View, Text } from 'react-native'
import React from 'react'
import {MaterialIcon, FontAwesome5} from '@expo/vector-icons'
import Department from '../components/Department'

const department = [
    {
        id: 1,
        title:'padiatrics',
        icons:<MaterialIcon name="child-caree" size={24} color="black" />
    },
    {
        id: 2,
        title:'padiatrics',
        icons:<FontAwesome5 name="lungs" size={24} color="black" />
    },
    {
        id: 3,
        title:'padiatrics',
        icons:<FontAwesome5 name="tooth" size={24} color="black" />
    },
    {
        id: 4,
        title:'padiatrics',
        icons:<FontAwesome5 name="heartbeat" size={24} color="black" />
    }
]
export default () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Department/>
    </View>
  )
}