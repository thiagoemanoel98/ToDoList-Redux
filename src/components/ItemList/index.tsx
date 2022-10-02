import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../redux/tasksSlice';

interface Props {
  name: string;
  id: string;
  isCompleted: boolean;
}

export const ItemList: React.FC<Props> = props => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTask({id: props.id}));
  }

  return (
    <TouchableOpacity
      style={styles.Container}
      onLongPress={() => {
        handleDelete();
      }}
      delayLongPress={500}>
      <Text style={styles.TaskName}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    backgroundColor: '#EEF6FD',
    borderRadius: 12,

    padding: 12,
    marginBottom: 16,

    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  TaskName: {
    fontSize: 20,
    color: '#000',
  },
  DeleteText: {
    fontSize: 12,
    color: '#000',
  },
});
