<script setup lang="ts">
useHead({
  title: "nuxt-start-template",
  meta: [
    {
      name: "description",
      content: "quick start nuxt3 project",
    },
  ],
  link: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
});

const { $client } = useNuxtApp();

const hello = await $client.example.hello.useQuery({ text: "from tRPC" });
const all = await $client.example.getAll.useQuery();
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"
  >
    <div
      class="container flex flex-col items-center justify-center gap-12 px-4 py-16"
    >
      <UButton
        icon="i-heroicons-pencil-square"
        size="sm"
        color="primary"
        variant="solid"
        label="Button"
        :trailing="false"
      />
      <h1
        class="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
      >
        Create <span class="text-[hsl(280,100%,70%)]">T3</span> App
      </h1>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <NuxtLink
          class="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/usage/first-steps"
          target="_blank"
        >
          <h3 class="text-2xl font-bold">
            First Steps →
          </h3>
          <div class="text-lg">
            Just the basics - Everything you need to know to set up your
            database and authentication.
          </div>
        </NuxtLink>
        <NuxtLink
          class="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/introduction"
          target="_blank"
        >
          <h3 class="text-2xl font-bold">
            Documentation →
          </h3>
          <div class="text-lg">
            Learn more about Create T3 App, the libraries it uses, and how to
            deploy it.
          </div>
        </NuxtLink>
      </div>
      <p class="text-2xl text-white">
        {{ hello.data ? hello.data.value?.greeting : "Loading tRPC query..." }}
      </p>

      <p class="text-2xl text-white">
        {{ all.data ? all.data.value : "Loading tRPC all query..." }}
      </p>
    </div>
  </main>
</template>
