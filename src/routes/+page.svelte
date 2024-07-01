<script lang="ts">
  import Product from '$lib/components/product.svelte'
  let { data: CartProduct } = $props()
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
