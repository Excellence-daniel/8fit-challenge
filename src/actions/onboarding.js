import {
  FITNESS_GOAL,
  UPDATE_AGE,
  SWITCH_HEIGHT_METRIC,
} from './action-types';

export const selectFitnessGoal = data => ({
  type: FITNESS_GOAL,
  data,
});

export const updateAge = data => ({
  type: UPDATE_AGE,
  data,
});

export const switchHeightMetric = data => ({
  type: SWITCH_HEIGHT_METRIC,
  data,
});
