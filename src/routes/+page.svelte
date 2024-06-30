<script lang="ts">
  import { getToastState } from '$lib/toast-state.svelte'

  const toastState = getToastState()

  let title = $state('')
  let message = $state('')
  let titleInput = $state<HTMLInputElement>()
</script>

<div class="container mx-auto">
  <h1 class="mb-4 text-xl font-semibold">Home page</h1>
  <a href="/products"> Products </a>
</div>
