<script>
  import { goto } from '$app/navigation'
  import { toast } from 'svelte-sonner'
  import axios from 'axios'
  export let data

  let uid = 'IP0551'
  let password = 'IP0551'
  let isLoading = false

  import { getContext } from 'svelte'
  import Input from '$lib/components/ui/input/input.svelte'
  import Button from '$lib/components/ui/button/button.svelte'
  import { Reload } from 'svelte-radix'
  import Card from '$lib/components/ui/card/card.svelte'
  import CardHeader from '$lib/components/ui/card/card-header.svelte'
  import {
    CardDescription,
    CardContent,
    CardTitle
  } from '$lib/components/ui/card'
  const userStore = getContext('user')

  const handleSignIn = async () => {
    isLoading = true
    try {
      const me = await axios.post('/api/auth/login', { uid, password })
      if (!me.data.sid) {
        userStore.updateMe({})
        toast.error(me.data.message)
        return
      }
      userStore.updateMe(me.data)
      goto('/')
    } catch (e) {
      userStore.updateMe({})
      toast.error(e.response.data)
    } finally {
      isLoading = false
    }
  }
</script>

<Card class="w-full max-w-md mx-auto mt-32">
  <CardContent>
    <div class="flex items-center justify-center">
      <div class="container mx-auto w-full max-w-md px-4 py-12 sm:px-6 lg:px-8">
        <h1 class="mb-6 text-center text-2xl font-bold text-[#000]">Login</h1>

        <form on:submit={handleSignIn} class="w-full space-y-4">
          <div>
            <label for="uid" class="block text-sm font-medium text-gray-700">
              User ID:
            </label>
            <Input
              id="uid"
              name="uid"
              bind:value={uid}
              placeholder="Enter your mobile no"
              required
              class="mt-1 block w-full rounded-md px-3  py-2 shadow-sm focus:outline-none  sm:text-sm"
            />
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700">Password:</label
            >
            <Input
              id="password"
              type="password"
              name="password"
              bind:value={password}
              placeholder="Enter your password"
              required
              class="mt-1 block w-full rounded-md border px-3  py-2 shadow-sm focus:outline-none  sm:text-sm"
            />
          </div>
          <br />
          <Button
            disabled={isLoading}
            type="submit"
            class="flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            {#if isLoading}
              <Reload class="mr-2 h-4 w-4 animate-spin" />
              Please wait
            {:else}
              Sign in
            {/if}
          </Button>
        </form>
        <!-- <Button
			variant="link"
			on:click={() => goto('/auth/signup')}
			class="mt-4 flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2"
		>
			Join as Vendor. Signup Now</Button
		> -->
      </div>
    </div>
  </CardContent>
</Card>
