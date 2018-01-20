exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
  	// Object.entries()
  	let a = []
  	for(let p in obj) {
  		if(obj.hasOwnProperty(p)) a.push(p + ': ' + obj[p])
  	}
  	return a
  }
};
