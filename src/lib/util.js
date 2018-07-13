// utility functions

export const getProgress = animatedObject => (
  animatedObject.interpolate({
    inputRange: [0, 0.4999999, 0.999999, 1],
    outputRange: [10, 0, 0, 0],
  })
);

export const getOpacity = animatedObject => (
  animatedObject.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })
);
