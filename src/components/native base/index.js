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

import { NativeBaseProvider, Box } from "native-base";

export default function NativeBase(){


  return (
    <>
      <Box>hello</Box>

      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textWhite: {
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 30,
    marginLeft:30,
    padding: 30,
    color:'#fff',
    backgroundColor: 'purple',
    fontSize: 20,

  },
});





