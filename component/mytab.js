import {tabcomponent} from './tabthing.js';

new Vue({
	el: '#app',
	components: {
		'my-tabs': tabcomponent
		},
	template: `<my-tabs></my-tabs>`
	
	});

