console.log('outside app.js');

import {tabcomponent} from './component/tabthing.js';

Vue.component('my-tab',tabcomponent);
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
						hi: 'hi there',
						clickHandler: function(){
										alert('ouch');
						}
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
										'id'			: this.hi + 'world',
										pdfFieldName: 'bar'
									},
									props: {
										myProp: 'yipee'
									},
									//domProps:{
									//				innerHTML: 'baz'
									//}
									on: { 
													click: this.clickHandler
									}
								}
				,
				[ 
							createElement('div',this.hi),
							createElement('div','A headline'),
							createElement('p','Example Text'),
							createElement('my-subel'),
							createElement('my-tab')

				] );
	}
});

