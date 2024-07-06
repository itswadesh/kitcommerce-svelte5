<script lang="ts">
	import { setToastState } from '$lib/toast-state.svelte';
	import { setCartState } from '$lib/cart.svelte';
	import type { Snippet } from 'svelte';
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
  import { ModeWatcher } from "mode-watcher";
  import { Toaster } from 'svelte-sonner'
	let { children }: { children: Snippet } = $props();

	setToastState();
	setCartState();
</script>

<ModeWatcher />


<Nav />

<main class="">
	{@render children()}
</main>
<Toaster />
