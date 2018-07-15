import {
  FITNESS_GOAL,
  UPDATE_AGE,
  UPDATE_HEIGHT,
  SWITCH_HEIGHT_METRIC,
} from '../actions/action-types';

const initialState = {
  fitnessGoal: '',
  age: 0,
  heightMetric: 'CM',
  heightCM: '',
  heightFt: '',
  heightIn: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FITNESS_GOAL:
      return {
        ...state,
        fitnessGoal: action.data,
      };
    case UPDATE_AGE:
      return {
        ...state,
        age: action.data,
      };
    case UPDATE_HEIGHT:
      return {
        ...state,
        ...action.data,
      };
    case SWITCH_HEIGHT_METRIC:
      return {
        ...state,
        heightMetric: action.data,
      };
    default:
      return state;
  }
};
