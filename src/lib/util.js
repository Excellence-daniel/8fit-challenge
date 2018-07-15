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

export const cmToFeet = (cm) => {
  const totalInches = Math.round(cm / 2.54);
  const inches = String(totalInches % 12);
  const feet = String((totalInches - inches) / 12);
  return { feet, inches };
};

export const ftToCM = (feet, inches) => {
  const newInches = parseInt(parseInt(feet * 12) + parseInt(inches));
  return String(Math.round(newInches * 2.54));
};
