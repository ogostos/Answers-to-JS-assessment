exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((a, b) => a + b, 0)
  },

  remove: function(arr, item) {
    return arr.filter(x => x !== item) 
  },

  removeWithoutCopy: function(arr, item) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1)
        i--
      }
    }
    return arr
  },

  append: function(arr, item) {
    return [...arr, item]
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    return [item, ...arr]
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2]
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    return arr.filter(x => x === item).length
  },

  duplicates: function(arr) {
    let a = []
    for(let val of arr) {
      if(arr.indexOf(val) !== arr.lastIndexOf(val) && !a.includes(val)) a.push(val)
    }
    return a
  },

  square: function(arr) {
    return arr.map(x => x ** 2)
  },

  findAllOccurrences: function(arr, target) {
    let occ = []
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) occ.push(i)
    }
    return occ
  }
};
