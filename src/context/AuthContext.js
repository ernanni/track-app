import AsyncStorage from '@react-native-async-storage/async-storage';

import CreateDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup' || 'signin':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

// implicit arrow function return pattern
const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'signup',
      payload: response.data.token,
    })
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
};

const signin = (dispatch) => {
  return () => {

  };
};

const signout = (dispatch) => {
  return () => {

  };
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);
