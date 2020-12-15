function MaxAndSecondMax(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Array Expected");
  }

  if (arr.some(isNaN)) {
    throw new Error("Array must only contain numberic values");
  }

  const max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  const secondMax = Math.max.apply(null, arr);

  return {
    max,
    secondMax,
  };
}

module.exports = MaxAndSecondMax;
