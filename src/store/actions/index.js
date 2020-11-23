import {CHANGE_NAME, CHANGE_AGE, CHANGE_LOCALE} from './type'

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

export function changeLocale(value) {
  return {
    type: CHANGE_LOCALE,
    value
  }
}
