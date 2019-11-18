import {
  SIGNIN,
  SIGNUP,
  ERROR_SIGNIN,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
} from './constants';
const intialState = {
  userName: '',
  password: '',
  onSuccess: {},
  onFailure: '',
};

const EmployeeStore = (state = intialState, action) => {
  switch (action.type) {
    case USERNAME_CHANGED: {
      return {
        ...state,
        userName: action.payload,
      };
    }
    case PASSWORD_CHANGED: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case SIGNIN: {
      return {
        ...state,
        onSuccess: action.payload,
        onFailure: '',
      };
    }
    case SIGNUP: {
      return {
        ...state,
        onSuccess: action.payload,
        onFailure: '',
      };
    }
    case ERROR_SIGNIN: {
      return {
        ...state,
        onFailure: action.payload,
        onSuccess: '',
      };
    }
    default:
      return state;
  }
};

export default EmployeeStore;
