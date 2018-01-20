exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    if(isNaN(num)) return false
    let str = ''
    if(num % 3 === 0) str += 'fizz'
    if(num % 5 === 0) str += 'buzz'
    return str ? str : num 
  }
};
