exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName = '') {
	  const folder = [], allFiles = []

	  function find(d) {
	  	const files = d.files
	  	folder.push(d.dir)

	  	for(let i = 0; i < files.length; i++) {
	  		if(typeof files[i] === 'object') {
	  			find(files[i])
	  		} else if(typeof files[i] === 'string' && files[i].includes(dirName)) {
	  			allFiles.push(files[i])
	  		}
	  	}
	  }

	  find(data)
	  return allFiles
  },

  permute: function(arr) {
  	let all = []
  	function p(init, concat = []) {
  		let c // c is current elem 
  		for(let i = 0; i < init.length; i++) {
  			// taking elem from init array
  			c = init.splice(i, 1)
  			// if no elems left, terminal condition
  			if(!init.length) all.push([...concat, ...c])
  			// if there are elems, keep taking elems according to i
				p([...init], [...concat, ...c])
				// when p function is done (hit terminal condition)
				//step bacl and insert all elems taking on each stage
				// to recover our initial array  
				init.splice(i, 0, c[0])
  		}
  	}
  	p(arr)
  	return all
  },

  fibonacci: function fib(n) {
  	if(!n) return 0
  	if(n === 1) return 1
  	return fib(n - 1) + fib(n - 2)
  },

  validParentheses: function par(n) {
  	if (!n) return ['']
  	let all = []
  	for(let i = 0; i < n; i++) {
  		let left = par(i), right = par(n - i - 1)
  		for(let j = 0; j < left.length; j++) {
  			for(let k = 0; k < right.length; k++) {
  				all.push(`(${left[j]})${right[k]}`)
  			}
  		}
  	}
  	return all	
  }
};
