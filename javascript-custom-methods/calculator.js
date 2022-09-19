/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sumAll = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumAll += numbers[i];
    }
    return sumAll;
  },
  getAverage: function (numbers) {
    var average = this.sumAll(numbers) / numbers.length;
    return average;
  }
};

// var doggo = {
//   bork: function () {
//     return 'bork! bork! bork!';
//   },
//   lick: function () {
//     return 'mlem';
//   }
// };
