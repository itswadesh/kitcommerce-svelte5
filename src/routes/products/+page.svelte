<script lang="ts">
  import type { CartProduct } from '$lib/types'
  import { getCartState } from '$lib/cart.svelte'
  const cartState = getCartState()
  import Product from './product.svelte'
  let { data: CartProduct } = $props()
  // const qualifiesForFreeShipping = $derived(
  //   cartState.summary?.total_amount >= 50
  // )
  // let freeShippingAlertCount = 0

  // $effect(() => {
  //   if (freeShippingAlertCount > 0) return
  //   if (qualifiesForFreeShipping) {
  //     alert('You have qualified for free shipping!')
  //     freeShippingAlertCount++
  //   }
  // })
</script>

<div class="container mx-auto">
  <div class="space-y-1 mb-8 text-center">
    <h2 class="text-2xl font-semibold tracking-tight">Recommended for You</h2>
    <p class="text-sm text-muted-foreground">
      High quality products at affordable price
    </p>
  </div>
  <div
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    {#each CartProduct.products as p}
      <Product product={p} aspectRatio="square" />
    {/each}
  </div>
</div>
<!-- <div
  class="grid grid-cols-1 gap-6 bg-gray-100 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
>
  {#each data.products as product}
    <div class="overflow-hidden rounded-xl bg-white shadow-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        class="h-48 w-full object-cover"
      />
      <div class="p-4">
        <p
          class="mb-2 overflow-hidden truncate text-lg font-medium text-gray-800"
        >
          {product.title}
        </p>
        <div class="flex items-center justify-between">
          <p class="text-xl font-bold">${product.price}</p>
          {#if cartState.cart_items.some((item) => item.product.id === product.id)}
            <button
              class="rounded-full bg-sky-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-sky-700"
              onclick={() => {
                cartState.add({ qty: -1, product })
              }}
            >
              -
            </button>
            {cartState.cart_items.find((c) => c.product.id === product.id)?.qty}
            <button
              class="rounded-full bg-sky-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-sky-700"
              onclick={() => {
                cartState.add({ qty: 1, product })
              }}
            >
              +
            </button>
          {:else}
            <button
              class="rounded-full bg-sky-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-sky-700"
              onclick={() => {
                cartState.add({ qty: 1, product })
              }}
            >
              Add to cart
            </button>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div> -->
