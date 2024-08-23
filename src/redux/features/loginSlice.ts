import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  password: "",
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setName, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
