<script lang="ts">
  import github from '$lib/images/github.svg'
  import CartItem from './cart-item.svelte'
  import ShoppingCart from 'phosphor-svelte/lib/ShoppingCart'
  import X from 'phosphor-svelte/lib/X'
  import { getCartState } from '$lib/cart.svelte'
  import MainNav from './main-nav.svelte'
  import Search from './search.svelte'
  import Button from './ui/button/button.svelte'
  import { toggleMode } from 'mode-watcher'
  import { GithubLogo, Sun } from 'svelte-radix'
  import { Moon } from 'phosphor-svelte'
  import { Card } from './ui/card'
  const cartState = getCartState()
  let cartOpen = $state(false)
</script>

<header class="flex justify-between container mx-auto items-center py-4">
  <MainNav />
  <div class="flex items-center gap-2">
    <Search />
    <div class="flex items-center">
      <div class="relative ml-auto flex items-center">
        <button
          onclick={() => (cartOpen = !cartOpen)}
          class="flex items-center rounded-full px-4 py-2"
        >
          <ShoppingCart class="mr-2 size-5" />
          <span
            >Cart {#if cartState.summary.total_qty}
              ({cartState.summary.total_qty})
            {/if}</span
          >
        </button>
        {#if cartOpen}
          <Card
            class="absolute right-0 top-8 z-10 mt-2 w-80 rounded-lg shadow-xl"
          >
            <div class="relative p-4">
              <h2 class="mb-4 text-lg font-semibold">Your Cart</h2>
              <button
                class="absolute right-4 top-4 rounded-full p-1"
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
          </Card>
        {/if}
      </div>
    </div>
    <Button on:click={toggleMode} variant="outline" size="icon">
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
    <div class="md:flex corner">
      <a href="https://github.com/sveltejs/kit">
        <Button variant="outline" size="icon">
          <!-- <img src={github} alt="GitHub" class="w-full m-1 text-white" /> -->
          <GithubLogo />
        </Button>
      </a>
    </div>
  </div>
</header>
