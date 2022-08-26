/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header1 from './components/header'
import Task from './components/task';

const App= () => {
 
  return (<>
    <View style={styles.container}>
      <Text> Hello World  </Text>
    </View>
  </>
   
  );
};

const styles = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor: '#ffff',
  alignItems: 'center' ,
  justifyContent: 'center',
  },
  });

export default App;
