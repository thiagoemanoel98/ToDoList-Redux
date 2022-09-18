import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ItemList} from '../../components/ItemList';

export function Home() {
  return (
    <View style={styles.Container}>
      <View style={styles.TopContainer}>
        <Text style={styles.Title}>To-Do in Redux</Text>
      </View>

      <View style={styles.TaskArea}>
        <ItemList id={String(new Date())} name="Tarefa 1" />
        <ItemList id={String(new Date())} name="Tarefa 2" />
        <ItemList id={String(new Date())} name="Tarefa 3" />
      </View>

      <View style={{flex: 1}} />
      <TouchableOpacity onPress={() => {}} style={styles.ButtonAdd}>
        <Text style={styles.TextButton}>Adicionar tarefa</Text>
      </TouchableOpacity>
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
  ButtonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#2982b3',
  },
  TextButton: {
    fontSize: 20,
    color: '#fff',
  },
});
