<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from '$lib/components/ui/card'
  import { Input } from '$lib/components/ui/input'
  import { Label } from '$lib/components/ui/label'
  import { Textarea } from '$lib/components/ui/textarea'
</script>

<div class="mt-16">
  <Card class="w-full max-w-md mx-auto">
    <CardHeader>
      <CardTitle>Contact Us</CardTitle>
      <CardDescription
        >Fill out the form below and we'll get back to you as soon as possible.</CardDescription
      >
    </CardHeader>
    <CardContent>
      <form class="grid gap-4">
        <div class="grid gap-2">
          <Label for="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div class="grid gap-2">
          <Label for="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            class="min-h-[150px]"
          />
        </div>
        <Button type="submit" class="w-full">Submit</Button>
      </form>
    </CardContent>
  </Card>
</div>
