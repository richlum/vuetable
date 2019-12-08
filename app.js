console.log('outside app.js');
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

			
	render:function(createElement){
					window.vm = this;
				console.log('inside render');
				console.log( typeof this);
				console.log(typeof(this.hi));
				return createElement('div',this.hi);
	}
});

