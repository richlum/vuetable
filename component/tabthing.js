const  theTemplate= 
	`<div id="dynamic-component">
		<button
			v-for="tab in tabs"
			v-bind:key="tab.name"
			v-on:click="currentTab = tab"
		>{{ tab.name }}</button>
		<component
			v-bind:is="currentTab.component"
		></component>
	</div>`

const tabs = [{
			name:'Home',
			component: {
				template:'<div>Home</div>'
			}
		},{
			name: 'Posts',
			component: {
				template:'<div>Posts</div>'
			}
		},{
			name: 'Archive',
			component: {
				template:'<div>Archive</div>'
			}
		}];
	
const tabcomponent = {	
			data: function(){
				return {
						tabs: tabs,
						currentTab: tabs[0]
				}
			},
		  template: theTemplate
	};
export {tabcomponent}
