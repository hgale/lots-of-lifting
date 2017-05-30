/**
 * Current Workout actions
 */
import t from './actionTypes'

/**
 * Set date for current workout
 */
export function setDate (date) {
  console.log('setDate')
  return (dispatch) => {
    dispatch({
      type: t.SET_WORKOUT_DATE,
      date
    })
  }
}

/**
 * Append exercise to current workout
 */
export function appendExercise (exercise) {
  console.log('appendExercise')
  return (dispatch) => {
    dispatch({
      type: t.APPEND_EXERCISE_TO_WORKOUT,
      exercise
    })
  }
}
