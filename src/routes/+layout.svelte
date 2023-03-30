<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
</script>

<NavBar />
<div>
	<div class="container mx-auto max-w-4xl mb-20 px-6 relative">
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.stone.100);
	}
</style>
