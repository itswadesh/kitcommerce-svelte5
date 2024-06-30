<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
  } from '$lib/components/ui/card'
  import { Plus, Minus } from 'svelte-radix'
  import { Button } from '$lib/components/ui/button'
  import { getCartState } from '$lib/cart.svelte'
  const cartState = getCartState()
  let { product, aspectRatio, width, height }: any = $props()
</script>

<Card class="w-full max-w-xs flex flex-col justify-between">
  <img src={product.thumbnail} height="250" alt="Product" class="aspect-[1]" />
  <CardHeader class="p-4">
    <CardTitle class="text-xl">{product.title}</CardTitle>
  </CardHeader>
  <CardFooter class="p-4 flex justify-between items-center ">
    <div class="text-2xl font-semibold">${product.price}</div>
    <div class="flex items-center">
      {#if cartState.cart_items.some((item) => item.product.id === product.id)}
        <Button
          variant="outline"
          size="icon"
          class="rounded-full text-xs mr-2 transition-colors duration-300"
          onclick={() => {
            cartState.add({ qty: -1, product })
          }}
        >
          <Minus />
        </Button>
        {cartState.cart_items.find((c) => c.product.id === product.id)?.qty}
        <Button
          variant="outline"
          size="icon"
          class="rounded-full mx-2  transition-colors duration-300"
          onclick={() => {
            cartState.add({ qty: 1, product })
          }}
        >
          <Plus />
        </Button>
      {:else}
        <Button
          variant="outline"
          class="rounded-full px-4 py-2 transition-colors duration-300"
          onclick={() => {
            cartState.add({ qty: 1, product })
          }}
        >
          <Plus class="mr-2 h-4 w-4 hover:animate-spin" />
          Add to cart
        </Button>
      {/if}
    </div>
  </CardFooter>
</Card>
