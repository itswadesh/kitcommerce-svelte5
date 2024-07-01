<script>
  import { Badge } from '$lib/components/ui/badge'
  import Button from '$lib/components/ui/button/button.svelte'
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from '$lib/components/ui/card'
  import { Label } from '$lib/components/ui/label'
  import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group'
  import Select from '$lib/components/select.svelte'
  import { Minus, Plus, Star, StarFilled, ZoomIn } from 'svelte-radix'
  let { data } = $props()
  import { getCartState } from '$lib/cart.svelte'
  const cartState = getCartState()
  let qty = $state(1)
  const allQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let selectedImage = $state(data.product?.thumbnail)
</script>

<div
  class="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6"
>
  <div class="grid gap-4">
    <div class="relative overflow-hidden rounded-lg">
      <img
        src={selectedImage}
        alt="Product Image"
        height={800}
        class="object-cover w-full aspect-square"
      />
      <div
        class="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition-opacity hover:opacity-100"
      >
        <Button variant="outline" size="icon" class="p-2">
          <ZoomIn class="h-6 w-6" />
        </Button>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-2">
      {#each data.product.images as img}
        <button
          onclick={() => {
            selectedImage = img
          }}
          class="border hover:border-primary rounded-lg overflow-hidden transition-colors"
        >
          <img
            src={img}
            alt="Preview thumbnail"
            width={100}
            height={100}
            class="aspect-square object-cover"
          />
          <span class="sr-only">View Image 1</span>
        </button>
      {/each}
    </div>
  </div>
  <div class="grid gap-6">
    <div>
      <p>{data.product.brand} / {data.product.category}</p>
      <h1 class="text-3xl font-bold">{data.product.title}</h1>
      <p class="text-red-500 text-sm">Only {data.product.stock} left</p>
      <p class="text-muted-foreground">
        {data.product.description}
      </p>
      <p class="mt-2">
        SKU: {data.product?.sku}
        <br />
        Barcode: {data.product?.meta?.barcode}
      </p>
      <p class="text-muted-foreground">
        Dimentions: {data.product.dimensions?.width} x {data.product.dimensions
          ?.height} x {data.product.dimensions?.depth}
        <br />
        Weight: {data.product.weight}
      </p>
      <p class="text-muted-foreground mt-2 space-x-2">
        {#each data.product.tags as t}
          <Badge variant="outline">{t}</Badge>
        {/each}
      </p>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-0.5">
        {#each { length: 5 } as _, i}
          {#if i < data.product.rating}
            <StarFilled class="w-5 h-5 fill-primary" />
          {:else}
            <Star class="w-5 h-5 fill-muted stroke-muted-foreground" />
          {/if}
        {/each}
      </div>
      <div class="text-4xl font-bold">${data.product.price}</div>
    </div>
    <form class="grid gap-4">
      <!-- <div class="grid gap-2">
        <Label for="color" class="text-base">Color</Label>
        <RadioGroup
          id="color"
          defaultValue="black"
          class="flex items-center gap-2"
        >
          <Label
            for="color-black"
            class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem id="color-black" value="black" />
            Black
          </Label>
          <Label
            for="color-white"
            class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem id="color-white" value="white" />
            White
          </Label>
          <Label
            for="color-blue"
            class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem id="color-blue" value="blue" />
            Blue
          </Label>
        </RadioGroup>
      </div>
      <div class="grid gap-2">
        <Label for="size" class="text-base">Size</Label>
        <RadioGroup id="size" defaultValue="m" class="flex items-center gap-2">
          <Label
            for="size-xs"
            class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem id="size-xs" value="xs" />
            XS
          </Label>
          <Label
            for="size-s"
            class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem id="size-s" value="s" />
            S
          </Label>
          <Label
            for="size-m"
            class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem id="size-m" value="m" />
            M
          </Label>
          <Label
            for="size-l"
            class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem id="size-l" value="l" />
            L
          </Label>
          <Label
            for="size-xl"
            class="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem id="size-xl" value="xl" />
            XL
          </Label>
        </RadioGroup>
      </div> -->
      <div class="grid gap-2">
        <ul class="">
          <li>Comes with {data.product.warrantyInformation}</li>
          <li>{data.product.returnPolicy}</li>
          <li>
            {data.product.shippingInformation}
          </li>
        </ul>
      </div>
      {#if cartState.cart_items.some((item) => item.product.id === data.product.id)}
        <div class="flex items-center">
          <Button
            variant="outline"
            size="icon"
            class="rounded-full text-xs mr-2 transition-colors duration-300"
            onclick={() => {
              cartState.add({ qty: -1, product: data.product })
            }}
          >
            <Minus />
          </Button>
          {cartState.cart_items.find((c) => c.product.id === data.product.id)
            ?.qty}
          <Button
            variant="outline"
            size="icon"
            class="rounded-full mx-2  transition-colors duration-300"
            onclick={() => {
              cartState.add({ qty: 1, product: data.product })
            }}
          >
            <Plus />
          </Button>
        </div>
      {:else}
        <Button
          size="lg"
          onclick={() => cartState.add({ product: data.product, qty })}
        >
          Add to cart
        </Button>
      {/if}
      <!-- <Select
          title="Select"
          label="Qty"
          id="qty"
          value={qty}
          data={allQuantity}
        /> -->
      <!-- <Select bind:value={qty}>
          <SelectTrigger class="w-24">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select> -->
    </form>
  </div>
</div>
