
exports.min = function min (arr) {
  if( Array.isArray(arr) && arr.length > 0) {
    return arr.sort( (prev, next) => prev - next)[0];
  }

  return 0;
}

exports.max = function max (arr) {
  if( Array.isArray(arr) && arr.length > 0) {
    return arr.sort( (prev, next) => next - prev)[0];
  }

  return 0;
}

exports.avg = function avg (arr) {
  if( Array.isArray(arr) && arr.length > 0) {
    return arr.reduce( (acc, val) => acc = acc + val) / arr.length;
  }

  return 0;
}
