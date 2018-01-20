exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	let s = '', prev = str[0], count = -1
  	for(let ch of str) {
  		if(prev === ch) count++
  		else {count = 0; prev = ch}
  		if(count < amount) s += ch
  	}
  	return s
  },

  wordWrap: function(str, cols) {
  	let final = '', count = 0, s = str.split(' ')
    for(let i = 0; i < s.length - 1; i++) {
      final += s[i]
      if(s[i].length + s[i+1].length + count > cols) {
        final += '\n'
        count = 0
      } else {
        final += ' '
        count = s[i].length + 1
      }
    }
    return final + s.pop()
  },

  reverseString: function(str) {
  	return [...str].reverse().join('')
  }
};
