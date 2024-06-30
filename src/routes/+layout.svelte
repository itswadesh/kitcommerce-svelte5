<script lang="ts">
	import { setToastState } from '$lib/toast-state.svelte';
	import { setCartState } from '$lib/cart.svelte';
	import type { Snippet } from 'svelte';
	import Toaster from '$lib/components/toaster.svelte';
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
  import { ModeWatcher } from "mode-watcher";
	import Sun from "svelte-radix/Sun.svelte";
  import Moon from "svelte-radix/Moon.svelte";
  import { toggleMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button";
  import Header from './Header.svelte'
	let { children }: { children: Snippet } = $props();

	setToastState();
	setCartState();
</script>

<ModeWatcher />

<Toaster />

<Header />

<Nav />

<main class="">
	{@render children()}
</main>