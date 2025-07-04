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

      if (action.payload.name.length <= 4) {
        alert("PREENCHA UM NOME COM MAIS DE 4 LETRAS");
        return { ...state };
      }

      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null,
        },
      };
    },
    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      };
    },
    addAddress: (state, action) => {
      if (action.payload.location === "" || action.payload.number === "") {
        alert("Preencha todos os campos");
        return { ...state };
      }

      if (state.user === null) {
        alert("Faça o login para cadastrar um endereço");
        return { ...state };
      }

      alert("Dados atualizados!");

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          },
        },
      };
    },
  },
});

export const { createUser, logoutUser, addAddress } = userSlice.actions;

export default userSlice.reducer;
