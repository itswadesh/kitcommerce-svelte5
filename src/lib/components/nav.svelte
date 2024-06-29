<script lang="ts">
  import CartItem from './cart-item.svelte'
  import ShoppingCart from 'phosphor-svelte/lib/ShoppingCart'
  import X from 'phosphor-svelte/lib/X'
  import { getCartState } from '$lib/cart.svelte'
  const cartState = getCartState()
  let cartOpen = $state(false)
</script>

<nav class="bg-gray-100 py-4">
  <ul class="flex items-center gap-4 px-4 text-sm">
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<div class="flex items-center bg-gray-300 p-4">
  <span class="text-lg font-bold">Svelte Commerce</span>
  <div class="relative ml-auto flex items-center">
    <button
      onclick={() => (cartOpen = !cartOpen)}
      class="flex items-center rounded-full bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
    >
      <ShoppingCart class="mr-2 size-5" />
      <span
        >Cart {#if cartState.summary.total_qty}
          ({cartState.summary.total_qty})
        {/if}</span
      >
    </button>
    {#if cartOpen}
      <div
        class="absolute right-0 top-8 z-10 mt-2 w-80 rounded-lg bg-white shadow-xl"
      >
        <div class="relative p-4">
          <h2 class="mb-4 text-lg font-semibold">Your Cart</h2>
          <button
            class="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
            aria-label="close cart"
            onclick={() => (cartOpen = false)}
          >
            <X class="size-4" />
          </button>
          {#each cartState.cart_items as _, i}
            <CartItem
              bind:cartProduct={cartState.cart_items[i]}
              removeItem={() =>
                cartState.add({
                  qty: -100000000000000000,
                  product: cartState.cart_items[i].product
                })}
            />
          {/each}
          <div class="mt-4 border-gray-200 pt-4">
            <p class="text-lg font-semibold">
              Total: ${cartState?.summary?.total_amount}
            </p>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
