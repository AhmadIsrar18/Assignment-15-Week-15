
// let array = [100, 0, 50]

// array.min() //=> 0
// array.max() //=> 100


Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };