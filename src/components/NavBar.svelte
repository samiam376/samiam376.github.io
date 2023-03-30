<script>
	import '../app.css';
	import { base } from '$app/paths';
	import NavElement from './NavElement.svelte';
</script>

<div
	class="container mx-auto flex items-center py-1 px-10 justify-end sticky top-0 z-50 bg-stone-100"
>
	<NavElement>
		<a href="/{base}"> About </a>
	</NavElement>
	<NavElement>
		<a href="{base}/blog"> Blog </a>
	</NavElement>
	<NavElement>
		<a href="https://github.com/samiam376/"> Github </a>
	</NavElement>
	<NavElement>
		<a href="https://www.linkedin.com/in/sam-sheridan/">LinkedIn</a>
	</NavElement>
</div>
