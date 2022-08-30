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
import Header1 from './components/header';
import Task from './components/task';

const App = () => {
  const [value, setValue] = useState('Jhon Doe');
  const [age, setAge] = useState(0);

  const [people, setPeople] = useState([
    {name: 'shaun', id: '1'},
    {name: 'yoshi', id: '2'},
    {name: 'mario', id: '3'},
    {name: 'luigi', id: '4'},
    {name: 'peach', id: '5'},
    {name: 'toad', id: '6'},
    {name: 'bowser', id: '7'},
  ]);
  // const ButtonClick = () => {
  //   if (value === 'Default Value') {
  //     setvalue('New value');
  //   } else {
  //     setvalue('Default Value');
  //   }
  // };

  const logId = (id) => {
         console.log("🚀 ~ file: App.js ~ line 38 ~ logID ~ id", id)     
    };


  return (
    <>
      <View style={styles.container}>



     <FlatList
        // numColumns={3}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> logId(item.name)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
      )}
      />
        {/* <ScrollView>
        
        {people &&
          people.map(item => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            );
          })}
          </ScrollView> */}

       
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
