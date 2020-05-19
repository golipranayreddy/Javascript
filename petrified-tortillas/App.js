import * as React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import {Constants} from 'expo';
import Task from './components/Task';
import Form from './components/Form';
import {Header} from './components/Form';




export default function App() {
  const [taskList, setTaskList] = React.useState([]);

  const deleteTask = (key) => {
    setTaskList((prevTasks) => {
      return prevTasks.filter((task) => task.key != key);
    })
  }


  const addTask = (text) => {
    if (text === "") return;
    let currentTask = { title: text, key: Date.now().toString() , addedDate : new Date().toLocaleDateString() };
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
        <Form newTask={addTask}/>
        <View style={styles.list}>
        <ScrollView>
        {taskList.map((each) => {
          return <Task task={each} removeTask={deleteTask} key={each.key}/>
        })}
          
        </ScrollView>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c5c5'
  },
  content: {
    padding: 35
  },
  list: {
    marginTop: 20
  }
})