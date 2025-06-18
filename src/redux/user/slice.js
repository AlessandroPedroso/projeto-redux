import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  totalALunos: 12,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      // console.log(state.user);
      console.log(action.payload);

      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: {
            location: "Rua dos devs",
            number: 34,
          },
        },
      };
    },
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
