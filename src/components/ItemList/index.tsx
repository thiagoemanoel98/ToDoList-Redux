import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  Animated,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../redux/tasksSlice';
import Swipeable from 'react-native-gesture-handler/Swipeable';

interface Props {
  name: string;
  id: string;
  isCompleted: boolean;
}

const windowWidth = Dimensions.get('window').width;

export const ItemList: React.FC<Props> = props => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTask({id: props.id}));
  }

  function LeftActions(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.leftAction}>
        <Animated.Text style={[styles.actionText, {transform: [{scale}]}]}>
          Concluido
        </Animated.Text>
      </View>
    );
  }

  function handleLeft() {
    Alert.alert('Concluido', 'Tarefa Concluida com sucesso!');
  }

  return (
    <Swipeable renderLeftActions={LeftActions} onSwipeableOpen={handleLeft}>
      <View style={styles.Container}>
        <Text style={styles.TaskName}>{props.name}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: windowWidth,
    backgroundColor: '#EEF6FD',

    padding: 22,
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
  leftAction: {
    flex: 1,
    backgroundColor: '#38833c',
    padding: 22,
    justifyContent: 'center',

    marginBottom: 16,
  },
  actionText: {
    fontSize: 18,
    color: '#fff',
  },
});
