/**
 * currentWorkout reducer
 */

import t from '../actions/currentWorkout/actionTypes'

const defaultState = {
  exercises: [],
  date: null
}

const currentWorkout = (state = defaultState, action) => {
  switch (action.type) {

    case t.SET_WORKOUT_DATE:
      return Object.assign({}, state, {
        date: action.date
      })
    case t.APPEND_EXERCISE_TO_WORKOUT:
      console.log('Hit APPEND_EXERCISE_TO_WORKOUT');
      let exercises = state.exercises
      action.exercise['id'] = exercises.length
      console.log('current exercises is ', exercises);
      exercises.push(action.exercise)
      console.log('After push exercises is ', exercises);
      return Object.assign({}, state, {
        exercises: exercises
      })
    default:
      return state
  }
}

export default currentWorkout
