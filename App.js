import React, {useState} from 'react';
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
import Flatlist from './src/components/Flatlist';
import NativeBase from './src/components/native base';
import Todo from './src/components/todo';

const App = () => {
  // console.log("first")

  return (
    <>

    <NativeBase/>
      {/* <Todo /> */}
      {/* <Flatlist/> */}











      {/* <View>
  <Text>helllo Work</Text>
</View> */}
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff  ',
//     // paddingTop: 40,
//     // paddingHorizontal: 60,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   }
// });

export default App;
