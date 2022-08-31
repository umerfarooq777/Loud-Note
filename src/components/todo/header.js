import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
  return (
  <View style={styles.header}>
      <Text style={styles.title}>Loud Note</Text>
  </View>
  )
}


const styles = StyleSheet.create({
header:{
height:80,
paddingTop:25,
backgroundColor:'#824AB7',
alignItems:'center',

},
title:{
    color:'#fff',
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold'

}
});  