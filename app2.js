import { one }  from "./one.js";

const subel = new Vue({
				data: {
								hi: "sub object "
				},
				template: "<div> {{ hi }} </div>"
});

console.log('outside app2.js');
new Vue({
	el: '#app',
	data: {
					hi: 'hi there'
	},
	beforeCreate: function(){
					console.log('before Create');
	},
	created: function(){
					console.log('created');
	},
	beforeMount: function(){
					console.log('before mount');
	},
	mounted: function(){
					console.log('mounted');
	},
	beforeUpdate: function(){
					console.log('before Update');
	},
	updated: function(){
					console.log('updated');
	},
	beforeDestroy: function(){
					console.log('before destroy');
	},
	destroyed: function(){
					console.log('destroyed');
	},
	template: '<div>{{ hi }}<a href="https://www.google.com" title="mylink"> myanchor </a>' + one('xxx') + subel + '</div>'
});

