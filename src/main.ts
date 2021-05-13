import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		title: 'My website'
	}
});

export default app;