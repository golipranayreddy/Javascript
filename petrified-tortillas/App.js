import * as React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {Constants} from 'expo';
import Task from './components/Task';
import Form from './components/Form';
import Header from './components/Header';



export default function App() {
  const [taskList, setTaskList] = React.useState([]);
  const [taskText, setTaskText] = React.useState();

  const deleteTask = (key) => {
    setTaskList((prevTasks) => {
      return prevTasks.filter((task) => task.key != key);
    })
  }


  const addTask = (text) => {
    if (text === "") return;
    let currentTask = { title: text, key: Date.now().toString() };
    setTaskList((prevTasks) => {
      return [
        currentTask,
        ...prevTasks
      ]
    })
  }


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form updateTask={addTask}/>
        <View style={styles.list}>
          <FlatList 
            data={taskList}
            renderItem={({ item }) => (
              <Task task={item} removeTask={deleteTask} key={item.key}/>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  content: {
    padding: 35
  },
  list: {
    marginTop: 20
  }
})