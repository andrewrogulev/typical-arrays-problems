exports.min = function min(array) {
  return (typeof array == "undefined" || array.length <= 0) ? 0
    : array.reduce((min, current) => {
      return (min < current) ? min : current;
    });
}

exports.max = function max(array) {
  return (typeof array == "undefined" || array.length <= 0) ? 0
    : array.reduce((max, current) => {
      return (max > current) ? max : current;
    });
}

exports.avg = function avg(array) {
  if (typeof array == "undefined" || array.length <= 0) {
    return 0;
  } else {
    let full = 0;
    let avgNumber = 0;

    for (let i = 0; i < array.length; i++) {
      full += array[i];
    }
    return avgNumber = full / array.length;
  }
}
