<script lang="ts">
  import { page } from '$app/stores'
  import { cn } from '$lib/utils.js'
</script>

<div class="mr-4 md:flex">
  <a href="/" class="mr-6 flex items-center space-x-2">
    <span class="font-bold"> Misiki </span>
  </a>
  <nav class="flex items-center gap-6 text-sm">
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>

    <!-- <a
      href="/products"
      class={cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname.startsWith('/docs/components')
          ? 'text-foreground'
          : 'text-foreground/60'
      )}
    >
      Products
    </a> -->
    <a
      href="/cart"
      class={cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname.startsWith('/themes')
          ? 'text-foreground'
          : 'text-foreground/60'
      )}
    >
      Cart
    </a>
    <a
      href="/about"
      class={cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname.startsWith('/examples')
          ? 'text-foreground'
          : 'text-foreground/60'
      )}
    >
      About
    </a>
    <a
      href="https://docs.litekart.in"
      target="_blank"
      class={cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname === '/docs'
          ? 'text-foreground'
          : 'text-foreground/60'
      )}
    >
      Docs
    </a>
    <!-- <a
      href="https://github.com/itswadesh/kitcommerce-svelte5"
      target="_blank"
      rel="noopener noreferrer"
      class={cn(
        'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block'
      )}
    >
      GitHub
    </a> -->
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
  </nav>
</div>
