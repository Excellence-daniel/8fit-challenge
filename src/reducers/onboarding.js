import {
  SWITCH_HEIGHT_METRIC,
} from '../actions/action-types';

const initialState = {
  fitnessGoal: '',
  age: 0,
  height: 0,
  heightMetric: 'CM',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_HEIGHT_METRIC:
      return {
        ...state,
        heightMetric: action.data,
      };
    default:
      return state;
  }
};
