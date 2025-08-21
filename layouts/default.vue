<template>
  <div class="bg-gradient-to-br from-primary via-primary to-black min-h-screen font-mono flex flex-col lg:flex-row relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-pulse" />
      <div class="absolute bottom-10 right-10 w-24 h-24 bg-accent/8 rounded-full blur-xl animate-pulse delay-1000" />
    </div>

    <!-- Navigation Sidebar -->
    <nav class="relative z-10 lg:w-24 w-full lg:h-screen h-auto lg:border-r border-b border-white/20 bg-white/10 backdrop-blur-md">
      <div class="lg:flex lg:flex-col lg:space-y-8 lg:justify-center lg:items-center lg:p-6 flex flex-row justify-around items-center p-4 lg:p-6">
        <nuxt-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="group relative transition-all duration-500 ease-in-out lg:py-2 py-3 lg:px-2 px-4 rounded-lg lg:rounded-none"
          :class="{
            'text-accent': $route.path === link.to,
            'text-white/60 hover:text-white': $route.path !== link.to,
          }"
        >
          <!-- Active indicator -->
          <div
            v-if="$route.path === link.to"
            class="absolute lg:-bottom-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-8 lg:h-0.5 w-full h-1 bg-accent rounded-full animate-pulse shadow-glow bottom-0 left-0"
          />

          <span class="text-base lg:text-base font-black tracking-widest relative z-10 block lg:block">
            {{ link.label }}
          </span>
        </nuxt-link>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="relative z-10 flex-grow w-full lg:h-screen overflow-auto">
      <div class="h-full">
        <slot />
      </div>
    </main>
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

<style scoped>
/* Custom scrollbar for main content */
main::-webkit-scrollbar {
  width: 8px;
}

main::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

main::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, var(--tw-color-accent), var(--tw-color-accent-dark));
  border-radius: 4px;
}

main::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, var(--tw-color-accent-dark), var(--tw-color-accent));
}

/* Remove focus outlines and any borders */
nuxt-link:focus,
nuxt-link:focus-visible {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* Remove any default link styling */
a {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
</style>
