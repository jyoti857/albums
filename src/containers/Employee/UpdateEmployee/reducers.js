import {UPDATE_EMPLOYEE} from './constants';

const initial_state = {
  name: '',
  phone: '',
  shift: '',
};

const updateReducers = (state = initial_state, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE: {
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    }
    default:
      return state;
  }
};

export default updateReducers;
