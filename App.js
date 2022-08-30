import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header1 from './components/header';
import Task from './components/task';

const App = () => {
  const [value, setValue] = useState('Jhon Doe');
  const [age, setAge] = useState(0);

  const [people, setPeople] = useState([
    {name: 'shaun', key: '1'},
    {name: 'yoshi', key: '2'},
    {name: 'mario', key: '3'},
    {name: 'luigi', key: '4'},
    {name: 'peach', key: '5'},
    {name: 'toad', key: '6'},
    {name: 'bowser', key: '7'},
  ]);
  // const ButtonClick = () => {
  //   if (value === 'Default Value') {
  //     setvalue('New value');
  //   } else {
  //     setvalue('Default Value');
  //   }
  // };

  return (
    <>
      <View style={styles.container}>


        <ScrollView>
        
        {people &&
          people.map(item => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            );
          })}
          </ScrollView>

       
      </View>

      {/* <View style={styles.container}>
        <Text style={styles.textWhite}>Enter Name:</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Jhon Doe'
        onChangeText={(val) => setValue(val)}
        /><Text style={styles.textWhite}>Enter Age:</Text>
        <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder='10'
        onChangeText={(val) => setAge(val)}
        />
      </View>
      <View style={styles.container}>
      
        
        <Text style={styles.textWhite}> Name is {value} and age is {age} </Text>
      </View>
      <View style={styles.container}>
        <Button title="Update State" />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff  ',
    paddingTop: 40,
    paddingHorizontal: 60,
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
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 20,
  },
});

export default App;
