import { createSlice } from '@reduxjs/toolkit';

const valueSlice = createSlice({
  name: 'myName',
  initialState: { value: 'Hello, Sarwar' }, // Updated initial state
  reducers: {
    setMyName: (state, action) => {
      state.value = action.payload; // Now this correctly updates state.value
    },
  },
});

export const { setMyName } = valueSlice.actions;
export default valueSlice.reducer;
