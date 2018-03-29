import {combineReducers} from 'redux'
import {NEW_QUERY, SET_WEATHER_DATA, SET_CONNECTION} from './actions'

const queries = (state = [], action)=> {
  switch (action.type) {
    case NEW_QUERY:
      const newState = state.slice(0, state.length)
      newState.unshift(action.data)
      return newState

    default:
      return state
  }
}

const weatherData = (state = null, action) => {
  switch(action.type) {
    case SET_WEATHER_DATA:
      return Object.assign({}, {
        weather: action.weather,
        forecast: action.forecast
      })

    default:
      return state
  }
}

const connection = (state = {}, action) => {
  switch (action.type) {
    case SET_CONNECTION:
      return Object.assign({}, action.data)

    default:
      return state
  }

}


export const rootReducer = combineReducers({
  queries,
  weatherData,
  connection
})
