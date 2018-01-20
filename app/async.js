exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return Promise.resolve(value)
  },

  manipulateRemoteData: function(url) {
  	return fetch(url)
  			.then(res => res.json())
  			.then(data => data.people.map(x => x.name))
  			.then(names => names.sort())
  }
};
