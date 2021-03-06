import {
  NAME_CHANGED,
  PHONE_CHANGED,
  SHIFT_CHANGED,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
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
        name: '',
        phone: '',
        shift: '',
      };
    }
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

export default EmployeeDetailsStore;
