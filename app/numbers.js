exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return num & 1 << (bit - 1) ? 1 : 0
  },

  base10: function(str) {
  	return parseInt(str, 2)
  },

  convertToBinary: function(num) {
  	return (num).toString(2).padStart(8, '0')
  }, 

  multiply: function(a, b) {
  	// should be bitwised later
  	let m1 = 0, m2 = 0
  	while (a < 1) {
  		m1++
  		a *= 10
  	}
  	while (b < 1) {
  		m2++
  		b *= 10
  	}
  	return (a * b) / (10 ** m1 * 10 ** m2)
  }
};
