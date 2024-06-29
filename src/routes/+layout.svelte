<script lang="ts">
	import { setToastState } from '$lib/toast-state.svelte';
	import { setCartState } from '$lib/cart.svelte';
	import type { Snippet } from 'svelte';
	import Toaster from '$lib/components/toaster.svelte';
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';

	let { children }: { children: Snippet } = $props();

	setToastState();
	setCartState();
</script>

<Toaster />
<Nav />

<main class="p-4">
	{@render children()}
</main>