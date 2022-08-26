import React from 'react'
import {Text, View,} from 'react-native'
const Header = () => {
  return (
    <View style={{textAlign:'center',borderRadius:10}}>

    <Text style={{fontSize:30 ,marginTop:30,marginBottom:30,textAlign:'center',fontWeight:'bold'}}>Today's Tasks</Text>
    </View>
  )
}

export default Header