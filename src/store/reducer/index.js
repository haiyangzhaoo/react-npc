import {CHANGE_NAME, CHANGE_AGE, CHANGE_LOCALE} from '../actions/type'

const init = {
  name: 'init_name',
  age: 'init_age',
  info: {
    name: 'zhy'
  },
  isLocal: true,
}

export default function (state = init, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.value
      }
      break;
    case CHANGE_AGE:
      return {
        ...state,
        age: action.value
      }
      break;
    case CHANGE_LOCALE:
      return {
        ...state,
        isLocal: action.value
      }
      break;
    default:
    return state
  }
}
