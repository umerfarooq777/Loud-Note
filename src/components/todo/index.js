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
import Header from './header';
import TodoItem from './todoItem';

function Flatlist() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
    });
    }




  return (
    <View style={styles.container}>
      {/* header */}
      <Header></Header>




      <View style={styles.content}>
        {/* to form */}



        <View style={styles.list}>
           {/* display todo */}
          <FlatList 
          
          data={todos}
          renderItem={({item})=>(
            // <Text style={styles.textWhite}> {item.text}</Text>
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
          />
        </View>




      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 40,
    // paddingHorizontal: 60,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
padding:20
  },
  list:{
    marginTop:50,
    // backgroundColor:'#333'
  },
  textWhite: {
    color: '#824AB7',
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
    marginLeft: 30,
    padding: 30,
    color: '#fff',
    backgroundColor: 'purple',
    fontSize: 20,
  },
});

export default Flatlist;
