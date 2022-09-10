import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TodoItem({item,pressHandler}) {
  return (
  <TouchableOpacity style={styles.box}>
      <Text style={styles.itemText}>{item.text}</Text>
      <TouchableOpacity onPress={()=>pressHandler(item.key)}>
      {/* <Text style={styles.dltItem}>X</Text> */}
      {/* <Icon name=''></Icon> */}
      <Icon style={styles.dltItem} name="trash-bin" size={30}></Icon>
      </TouchableOpacity>
  </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
box:{
height:50,
paddingTop:15,
marginBottom:10,
backgroundColor:'#824AB7',
// alignItems:'center',
display:'flex',
justifyContent:'space-between',
flexDirection:'row',
borderBottomLeftRadius: 10,
borderBottomRightRadius: 10,
borderTopLeftRadius: 10,
borderTopRightRadius: 10,

},
itemText:{
  paddingLeft:20,
    color:'#fff',
    fontSize:15,
    textAlign:'right',
    fontWeight:'bold',

},
dltItem:{
  // paddingLeft:20,
    color:'#fff',
    // backgroundColor:'#fff',
    fontSize:25,
    marginRight:15,
    // padding:-2,
    // textAlign:'center',
    fontWeight:'bold',
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5,
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5,
    

}
});  