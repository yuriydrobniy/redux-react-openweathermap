import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILED
} from '../constants/actionTypes';


const initialState = {
  city: 'Odessa',
  weather
}

export default function weather(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        weather: {
          temp:     Math.round(action.payload.json.main.temp),
          humidity: action.payload.json.main.humidity,
          pressure: Math.round(action.payload.json.main.pressure * 0.75),
          station:  action.payload.json.name
        }
      })
    case FETCH_WEATHER_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
} 
