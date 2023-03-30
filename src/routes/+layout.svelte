<script>
	import '../app.css';
	import { base } from '$app/paths';
</script>

<div
	class="container mx-auto flex items-center py-1 px-10 justify-end text-slate-700 font-sans text-lg font-semibold sticky top-0 z-50 bg-stone-100"
>
	<div class="p-3 hover:text-amber-600">
		<a href="/{base}"> About </a>
	</div>
	<div class="p-3 hover:text-amber-600">
		<a href="{base}/blog"> Blog </a>
	</div>
	<div class="p-3 hover:text-amber-600">
		<a href="https://github.com/samiam376/"> Github </a>
	</div>
	<div class="p-3 hover:text-amber-600">
		<a href="https://www.linkedin.com/in/sam-sheridan/">LinkedIn</a>
	</div>
</div>
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
