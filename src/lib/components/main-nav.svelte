<script lang="ts">
  import { page } from '$app/stores'
  import { cn } from '$lib/utils.js'
</script>

<div class="mr-4 md:flex">
  <a href="/" class="mr-6 flex items-center space-x-2">
    <span class="font-bold"> Misiki </span>
  </a>
  <nav class="flex items-center gap-6 text-sm hidden sm:inline-block">
    <a
      href="/docs"
      class={cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname === '/docs'
          ? 'text-foreground'
          : 'text-foreground/60'
      )}
    >
      Docs
    </a>
    <a
      href="/products"
      class={cn(
        'transition-colors hover:text-foreground/80',
        $page.url.pathname.startsWith('/docs/components')
          ? 'text-foreground'
          : 'text-foreground/60'
      )}
    >
      Products
    </a>
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
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      class={cn(
        'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block'
      )}
    >
      GitHub
    </a>
  </nav>
</div>
