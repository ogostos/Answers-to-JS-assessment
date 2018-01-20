exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
   		let greeting = str1, name = str2
   		return {
   			name,
   			greeting,
   			sayIt() {
   				return this.greeting + ', ' + this.name
   			}
   		}
    }
};
