import {CHANGE_NAME, CHANGE_AGE} from './type'

export function changeName(value) {
  return {
    type: CHANGE_NAME,
    value
  }
}

export function changeAge(value) {
  return {
    type: CHANGE_AGE,
    value
  }
}
