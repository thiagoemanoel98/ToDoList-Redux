import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {ItemList} from '../../components/ItemList';
import {addTask} from '../../redux/tasksSlice';

interface ITaskState {
  tasks: [];
}

interface ITask {
  id: string;
  name: string;
  isCompleted: boolean;
}



export function Home() {
  const dispatch = useDispatch();
  const [nameTask, setNameTask] = React.useState('');

  
  const myTasks = useSelector((state: ITaskState) => {
    return state.tasks;
  });

  function handleAddTask() {
    dispatch(addTask({name: nameTask}));
    setNameTask('');
  }

  return (
    <View style={styles.Container}>
      <View style={styles.TopContainer}>
        <Text style={styles.Title}>To-Do in Redux</Text>
      </View>

      <View style={styles.TaskArea}>
        {myTasks.map((todo: ITask) => (
          <ItemList
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
          />
        ))}
      </View>

      <View style={{flex: 1}} />

      <View style={styles.AreaBottom}>
        <TextInput
          style={styles.input}
          onChangeText={setNameTask}
          value={nameTask}
          placeholder="Nova tarefa"
        />
        <TouchableOpacity onPress={handleAddTask}>
          <Text style={styles.TextButton}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TopContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#2982b3',
  },
  Title: {
    fontSize: 28,
    color: '#fff',
  },
  TaskArea: {
    marginTop: 12,
    alignItems: 'center',
  },
  TextButton: {
    fontSize: 18,
    color: '#fff',
  },
  input: {
    height: 50,
    width: '60%',
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 10,
    color: '#000',
    fontSize: 20,
    borderRadius: 10,
  },
  AreaBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#2982b3',
  },
});
