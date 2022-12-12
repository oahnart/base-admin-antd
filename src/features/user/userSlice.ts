import { createSlice } from "@reduxjs/toolkit";

interface LoginProps {
  acToken: string;
}

const initialState: LoginProps = {
  acToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.acToken = action.payload;
    },
    deleteDataUser: (state, action) => {
      state.acToken = action.payload;
    },
  },
});

export const { setDataUser, deleteDataUser } = userSlice.actions;

export default userSlice.reducer;
