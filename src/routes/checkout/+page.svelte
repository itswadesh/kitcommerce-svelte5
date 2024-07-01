<script lang="ts">
  import { getCartState } from '$lib/cart.svelte'
  import { Button } from '$lib/components/ui/button'
  import { Separator } from '$lib/components/ui/separator'
  import { Minus, Plus, Trash } from 'svelte-radix'
  const cartState = getCartState()
</script>

<div class="container mx-auto px-4 md:px-6 py-8">
  <h1 class="text-2xl font-bold mb-6">Checkout</h1>
  <div class="grid md:grid-cols-[1fr_300px] gap-8">
    <div class="space-y-4">
      {#each cartState.cart_items as item}
        <div class="flex items-center gap-4 border rounded-lg p-4">
          <img
            src={item.product?.thumbnail}
            alt={item.product?.title}
            width={80}
            height={80}
            class="rounded-md object-cover"
          />
          <div class="flex-1">
            <a href="/products/{item.product?.id}">
              <h3 class="font-medium">{item.product?.title}</h3>
            </a>
            <div class="flex items-center gap-4 mt-2">
              <div class="font-medium">${item.product?.price?.toFixed(2)}</div>
              <div class="flex items-center">
                <button
                  onclick={() => {
                    if (item.qty === 1) {
                      cartState.add({
                        qty: -100000000000000000,
                        product: item.product
                      })
                    } else {
                      cartState.add({ qty: -1, product: item.product })
                    }
                  }}
                  class="rounded p-1"
                  aria-label="Subtract 1 from qty"
                >
                  <Minus class="size-4" />
                </button>
                <span class="mx-2">
                  {item.qty}
                </span>
                <button
                  class="rounded p-1"
                  aria-label="Add 1 to qty"
                  onclick={() =>
                    cartState.add({ qty: 1, product: item.product })}
                >
                  <Plus class="size-4" />
                </button>
                <button
                  onclick={() => cartState.remove(item.item_id)}
                  class="ml-4 rounded p-1 text-red-500 hover:bg-red-100"
                >
                  <Trash class="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div>
      <h2 class="text-xl font-bold mb-4">Summary</h2>
      <div class="space-y-4">
        <div class="flex justify-between">
          <p class="text-gray-500">Subtotal</p>
          <p>${cartState?.summary?.total_amount || 0}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-500">Shipping</p>
          <p>Free</p>
        </div>
        <Separator />
        <div class="flex justify-between font-medium">
          <p>Total</p>
          <p class="text-2xl font-bold">
            ${cartState?.summary?.total_amount || 0}
          </p>
        </div>
      </div>
      <Button class="w-full mt-4" on:click={() => {}}>
        Pay ${cartState?.summary?.total_amount || 0} with UPI
      </Button>
    </div>
  </div>
</div>
