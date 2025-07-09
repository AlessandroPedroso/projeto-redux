import {
  all,
  takeEvery,
  call,
  put,
  delay,
  takeLatest,
} from "redux-saga/effects";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserByIdSuccess,
  fetchUserByIdFailure,
} from "./slice";
import axios from "axios";
// API USERS: https://jsonplaceholder.typicode.com/users/

//takeLatest => pega o ultimo clique do usuário

function* fetchUsers() {
  try {
    yield delay(2000);
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/"
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
    console.log(error);
  }
}

function* fetchUserById(action) {
  try {
    const userID = action.payload;
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    yield put(fetchUserByIdSuccess(response.data));
  } catch (error) {
    yield put(fetchUserByIdFailure(error.message));
  }
}

export default all([
  takeLatest("user/fetchUsers", fetchUsers),
  takeEvery("user/fetchUserById", fetchUserById),
]);
