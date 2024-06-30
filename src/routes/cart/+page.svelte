<script>
  import { Button } from '$lib/components/ui/button'
  import { getCartState } from '$lib/cart.svelte'
  import { Trash } from 'svelte-radix'
  import { Separator } from '$lib/components/ui/separator'
  const cartState = getCartState()
</script>

{JSON.stringify(cartState.cart_items)}

<div class="container mx-auto px-4 md:px-6 py-8">
  <h1 class="text-2xl font-bold mb-6">Your Cart</h1>
  <div class="grid md:grid-cols-[1fr_300px] gap-8">
    <div class="space-y-4">
      {#each cartState.cart_items as item}
        <div class="flex items-center gap-4 border rounded-lg p-4">
          <img
            src="/placeholder.svg"
            alt={item.title}
            width={80}
            height={80}
            class="rounded-md object-cover"
          />
          <div class="flex-1">
            <h3 class="font-medium">{item.title}</h3>
            <div class="flex items-center gap-4 mt-2">
              <!-- <Select
                defaultValue={item.qty}
                onValueChange={(value) => handleQuantityChange(item.id, parseInt(value))}
                class="w-20"
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
                    <SelectItem key={qty} value={qty.toString()}>
                      {qty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> -->
              <div class="font-medium">${item.price?.toFixed(2)}</div>
              <Button
                variant="ghost"
                size="icon"
                onclick={() => cartState.add({ product: item.id, qty: 1 })}
              >
                <Trash class="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div class="bg-muted/20 rounded-lg p-6 sticky top-4">
      <h2 class="text-lg font-bold mb-4">Order Summary</h2>
      <div class="space-y-2">
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>${cartState.summary?.total_amount?.toFixed(2)}</span>
        </div>
        <div class="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <Separator />
        <div class="flex justify-between font-medium">
          <span>Total</span>
          <span class="text-2xl font-bold"
            >${cartState.summary?.total_amount?.toFixed(2)}</span
          >
        </div>
      </div>
      <Button class="w-full mt-6">Proceed to Checkout</Button>
    </div>
  </div>
</div>
