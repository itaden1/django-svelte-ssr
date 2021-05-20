<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import HomePage from "./pages/HomePage.svelte";
	import AboutPage from "./pages/AboutPage.svelte";


	export let title: string;
	export let url: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Router url={url}>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	</nav>
	<div>
		<Route path="/" component={HomePage}/>
		<Route path="/about" component={AboutPage}/>
	</div>
</Router>
<style>

</style>