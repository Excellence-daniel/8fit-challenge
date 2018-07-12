// utilituy functions
// import { Animated } from 'react-native';

// export const customTransitionFunctionEx = (transitionInfo) => {
//   const { progress, start, end } = transitionInfo;
//   const scaleInterpolation = progress.interpolate({
//     inputRange: [0, start, end, 1],
//     // inputRange: [0, 1],
//     outputRange: [88, 80, 1, 1],
//     // outputRange: [300, ],
//   });
//   return { transform: [{ scale: scaleInterpolation }] };
// };

// export const customTransitionFunction = (transitionSpecification) => {
//   if (!transitionSpecification || transitionSpecification.metrics === undefined) {
//     return {};
//   }
//   const { start, end } = transitionSpecification;
//   const distanceValue = 20;

//   const progress = transitionSpecification.progress.interpolate({
//     inputRange: [0, start, end, 1],
//     outputRange: [distanceValue, 0, 0, 100],
//   });
//   const opacity = transitionSpecification.progress.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 1],
//   });

//   return {
//     opacity,
//     transform: [
//       { translateY: progress },
//     ],
//   };
// };

export const getProgress = animatedObject => (
  animatedObject.interpolate({
    inputRange: [0, 0.4999999, 0.999999, 1],
    outputRange: [15, 0, 0, 0],
  })
);

export const getOpacity = animatedObject => (
  animatedObject.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })
);
