console.log('outside app.js');

Vue.component('my-subel',{
				data: function(){
								return {
									txt : "I am a subelement"
								}
				},
				render(h){
								console.log(this);
								console.log ('this ' + Object.keys(this));
								console.log("mysubel.this.txt = " + this.txt);
								return h('div', this.txt)

				}
});

new Vue({
	el: '#app',
	data: function() {
					return {
						hi: 'hi there'
					}
	},
  render(createElement){
					window.vm = this;
				console.log('inside render');
				console.log( typeof this);
				console.log(typeof(this.hi));
				return createElement('div', 
								{ 
									class:{
											foo: true,
											bar: false
									},
									style:{
											color: 'red',
											fontSize: '14px'
									},
									attrs:{
										'id'			: this.hi + 'world'
									}
								}
				,
				[ 
							createElement('div',this.hi),
							createElement('div','A headline'),
							createElement('p','Example Text'),
							createElement('my-subel')
				] );
	}
});

