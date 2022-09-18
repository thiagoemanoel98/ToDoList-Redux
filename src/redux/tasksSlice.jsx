import {createSlice} from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state: any, action) => {
      const newTask = {
        id: String(new Date()),
        name: action.payload.name,
      };
      state.push(newTask);
    },

    deleteTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;
