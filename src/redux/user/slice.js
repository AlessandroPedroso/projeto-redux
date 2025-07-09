import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  totalALunos: 12,
  users: [],
  loading: false,
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
    deleteAddress: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: null,
        },
      };
    },
    fetchUsers: (state) => {
      console.log("CHAMOU NOSSO FETCH USERS");
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      console.log("CAIU NA SUCCESS");
      console.log(action.payload);

      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state, action) => {
      console.log("CAIU NA FAILURE");
      console.log(action.payload);
      state.loading = false;
    },
    fetchUserById: (state) => {
      console.log("CHAMOU NO SLICE");
    },
    fetchUserByIdSuccess: (state, action) => {
      console.log("User do id");
      console.log(action.payload);
    },
    fetchUserByIdFailure: (state) => {
      console.log("DEU ERRO NO fetchById");
    },
  },
});

export const {
  createUser,
  logoutUser,
  addAddress,
  deleteAddress,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserById,
  fetchUserByIdSuccess,
  fetchUserByIdFailure,
} = userSlice.actions;

export default userSlice.reducer;
