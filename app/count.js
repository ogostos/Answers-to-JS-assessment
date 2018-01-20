exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	let timer
  	/* not WORKING PROPERLY cause gap after first num is more than 100ms
		100ms, 200ms, 300ms and so on is not the same as 100ms + 100ms + 100ms
    when using loop, we sort of stack all setTimeouts into a queue waiting 
    to be called. And when loop is finished and there is no function running 
    we call those timeouts' functions - so there is no real gap between logging
  	for(let i = start; i <= end; i++) {
			if(i === start) console.log(i)
			else timer = setTimeout(() => console.log(i), 100 * i)
		} */ 

    // Here we log first num THEN we set our first Timeout
    // when time if finished and first timeout with LOG function to be called
    // is pushed into callback queue. as we poped from stack log function
    // we can call function from timeout, which is again LOG
    // in other words we are doing console.log + wait 100ms + console.log + wait...

  	function log(){
  		console.log(start)
  		if(++start <= end) {
  			timer = setTimeout(log, 100)
  		}
  	}
  	log()
  	return {
  		cancel() {
  			clearTimeout(timer)
  		}
  	}
  }
};
