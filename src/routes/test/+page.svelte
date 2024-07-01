<script>
  import { Button } from '$lib/components/ui/button'
  import { Input } from '$lib/components/ui/input'
</script>

<div class="container mx-auto">
  <section class="w-full">
    <div class="flex items-center">
      <div class="flex flex-col justify-center space-y-4">
        <div class="space-y-2">
          <h1
            class="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#1E293B]"
          >
            Unlock the Power of Web Development
          </h1>
          <p class="max-w-[600px] text-[#64748B] md:text-xl">
            Our platform provides the toolkit your team needs to build
            exceptional web experiences, without the hassle of configuration.
          </p>
        </div>
        <div class="w-full max-w-sm space-y-2">
          <form class="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              class="max-w-lg flex-1 bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-[#1E293B] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1]"
            />
            <Button
              type="submit"
              class="inline-flex h-10 items-center justify-center rounded-md bg-[#6366F1] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4F46E5] disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </Button>
          </form>
          <p class="text-xs text-[#64748B]">
            Sign up to get notified when we launch.{' '}
            <a href="#" class="underline underline-offset-2 text-[#6366F1]">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
      <img
        src="/placeholder.svg"
        width="550"
        height="550"
        alt="Hero"
        class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
      />
    </div>
  </section>
</div>
