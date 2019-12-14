

Vue.component('blog-post', {
				props: ['title'],
				template:	`<h3>{{ title }}</h3>`
});


const vm = new Vue({
				el: '#app',
				data: {
						posts: [
								{id: 1, title: 'My journey'},
								{id: 2, title: 'Blogging' },
								{id: 3, title: 'Why' }
						]
				},
				template: `
					<div>
						<blog-post
							v-for="post in posts"
							v-bind:key="post.id"
							v-bind:title="post.title"
						></blog-post>
				</div>`
	});

