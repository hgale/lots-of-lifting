/**
 * Current Workout actions
 */
import t from './actionTypes'

/**
 * Set date for current workout
 */
export function setDate (date) {
  if (!date) return
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
  if (!exercise) return
  return (dispatch) => {
    dispatch({
      type: t.APPEND_EXERCISE_TO_WORKOUT,
      exercise
    })
  }
}
