<template>
  <div class="bg-primary h-screen font-mono flex">
    <div class="flex flex-col space-y-6 text-white z-20 flex-shrink-0 justify-center items-start p-4 md:border-0 border-r-1 border-[#313144]">
      <nuxt-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="text-sm uppercase transition-all duration-300 ease-in-out hover:opacity-80 tracking-widest"
        :class="{
          'text-accent text-xl font-bold tracking-[0.2em] underline decoration-accent underline-offset-4': $route.path === link.to,
          'tracking-[0.1em]': $route.path !== link.to,
        }"
      >
        <span>{{ link.label }}</span>
      </nuxt-link>
    </div>

    <div class="flex-grow w-full h-full overflow-auto">
      <div class="mx-auto py-20 h-full flex items-center justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  { to: '/', label: '01' },
  { to: '/work', label: '02' },
  { to: '/about', label: '03' },
  { to: '/contact', label: '04' },
]
</script>
