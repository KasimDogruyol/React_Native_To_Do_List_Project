import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import Task from './components/task';

export default function App() {
  const [task, SetTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    SetTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  
  return (
    <View style={styles.container}>
      {/* Günlük Görevler */}
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Today's Task</Text>
        <View style = {styles.items}>
          
          {
            taskItems.map((item, index) => {
              return (
              <TouchableOpacity key = {index} onPress={() => completeTask(index)}>
                
                <Task key = {index} text = {item} />
              </TouchableOpacity>
              )
            }
            )
          }
          {/* Görevlerin geleceği yerler */}
          {/* <Task text = {'Task 1'} />
          <Task text = {'Task 2'} /> */}

        </View>
      </View>


      {/* gorev olustur */}
      
      <KeyboardAvoidingView
        behavior = {Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.writeTaskWrapper}
        >
        <TextInput style = {styles.input} placeholder = {'Write a task'} value={task} onChangeText ={text => SetTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text> 
          
          </View>


        </TouchableOpacity>

      </KeyboardAvoidingView>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'black',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 3,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 3,
  },
  addText: {
    
  },
});
