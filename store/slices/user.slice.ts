import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "store/store";
import { IUser } from "model";

// Reducer
const initialState: IUser = {
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: IUser, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
