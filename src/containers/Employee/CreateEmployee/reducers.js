import {
  NAME_CHANGED,
  PHONE_CHANGED,
  SHIFT_CHANGED,
  CREATE_EMPLOYEE,
} from './constants';

const initialState = {
  name: '',
  phone: '',
  shift: '',
};

const EmployeeDetailsStore = (state = initialState, action) => {
  switch (action.type) {
    case NAME_CHANGED: {
      return {...state, name: action.payload};
    }
    case PHONE_CHANGED: {
      return {
        ...state,
        phone: action.payload,
      };
    }
    case SHIFT_CHANGED: {
      return {
        ...state,
        shift: action.payload,
      };
    }
    case CREATE_EMPLOYEE: {
      return {
        ...state,
        name: action.name,
        phone: action.phone,
        shift: action.shift,
      };
    }
    default:
      return state;
  }
};

export default EmployeeDetailsStore;
