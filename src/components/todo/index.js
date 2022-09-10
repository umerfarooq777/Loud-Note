import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import AddTodo from './addTodo';
import Header from './header';
import TodoItem from './todoItem';

function Flatlist() {
  const [todos, setTodos] = useState([]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
    });
    }

    const submitHandler = (text) => {
      if (text === '' || text === '') {
        alert("Input cannot be empty...")
      } else {
        setTodos((prevTodos) => {
        return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
        ];
        })           
      }
    }



  return (
    <View style={styles.container}>
      {/* header */}
      <Header></Header>




      <View style={styles.content}>
        {/* to form */}

      <AddTodo submitHandler={submitHandler}/>
<ScrollView showsVerticalScrollIndicator={false}>

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
            </ScrollView>




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
    marginTop:20,
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
