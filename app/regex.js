exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str) 
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1{1,}/i.test(str)
  },

  endsWithVowel: function(str) {
    return /[aoiue]$/i.test(str)
  },

  captureThreeNumbers: function(str) {
    return str.match(/\d{3}/) ? str.match(/\d{3}/)[0] : false
  },

  matchesPattern: function(str) {
    //XXX-XXX-XXXX where all X's are digits
    return /^\d{3}-\d{3}-\d{4}$/.test(str)
  },

  isUSD: function(str) {
    return /^\$\d+(,\d{1,2})*(,\d{3})*(\.\d{2})?$/.test(str)
  }
};
