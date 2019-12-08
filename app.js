console.log('outside app.js');
new Vue({
				el: '#app',
				data: {
								hi: 'hi there'
				},
			
			render(h){
							console.log('inside render');
						return h('div',this.hi)
			}
});

