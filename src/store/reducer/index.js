import {CHANGE_NAME, CHANGE_AGE} from '../actions/type'

const init = {
  name: 'init_name',
  age: 'init_age',
  info: {
    name: 'zhy'
  }
}

export default function (state = init, action) {
  switch (action.type) {
    case 'change_name':
      return {
        ...state,
        name: action.value
      }
      break;
    case 'change_age':
      return {
        ...state,
        age: action.value
      }
      break;
    default:
    return state
  }
}
