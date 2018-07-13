import {
  FITNESS_GOAL,
  UPDATE_AGE,
  UPDATE_HEIGHT,
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

export const updateHeight = data => ({
  type: UPDATE_HEIGHT,
  data,
});

export const switchHeightMetric = data => ({
  type: SWITCH_HEIGHT_METRIC,
  data,
});
