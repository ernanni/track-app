import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'current_location':
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
}

const startRecording = dispatch => () => { };

const stopRecording = dispatch => () => { };

const addLocation = dispatch => (location) => {
  dispatch({ type: 'current_location', payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { isRecording: false, locations: [], currentLocation: null }
);