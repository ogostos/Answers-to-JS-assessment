exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function (str) {
    return function(ing) {
      return `${str}, ${ing}`
    }
  },

  makeClosures: function(arr, fn) {
    let a = []
    for(let i = 0; i < arr.length; i++) {
      a[i] = (function(x) {
        return function() {
          return fn(x)
        }
      })(arr[i])
    }
    return a
  },
  partial: function(fn, str1, str2) {
    return function(...rest) {
      return fn.call(this, str1, str2, ...rest)
    }
  },

  useArguments: function() {
    return [...arguments].reduce((a, b) => a + b)
  },

  callIt: function(fn, ...rest) {
    return fn(...rest)
  },

  partialUsingArguments: function(fn, ...first) {
    return function(...last) {
      return fn.call(this,...first, ...last)
    }
  },

  curryIt: function(fn) {
    const l = fn.length, arg = []
    return function resolver(x) {
      arg.push(x)
      if(arg.length === l) return fn.apply(this, arg)
      else return resolver
    }
  }
};

