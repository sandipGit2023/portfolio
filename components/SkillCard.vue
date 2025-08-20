<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
      v-for="item in skills"
      :key="item.lable"
      class="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105 cursor-pointer"
    >
      <div class="flex flex-col items-center justify-center text-center space-y-4">
        <div class="relative">
          <Icon :name="item.icon" class="text-6xl lg:text-7xl text-accent group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
          <div class="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
        </div>
        <p class="font-bold text-white capitalize group-hover:text-accent transition-all duration-300 text-sm lg:text-base">
          {{ item.lable }}
        </p>
      </div>

      <!-- Animated background elements -->
      <div class="absolute top-2 right-2 w-2 h-2 bg-accent/40 rounded-full animate-ping"></div>
      <div class="absolute bottom-2 left-2 w-1 h-1 bg-accent/60 rounded-full animate-ping delay-1000"></div>
    </div>
  </div>
</template>

<script setup>
const skills = ref([
  { lable: 'laravel', icon: 'mdi:laravel' },
  { lable: 'node', icon: 'fa6-brands:node' },
  { lable: 'tailwindcss', icon: 'lineicons:tailwindcss' },
  { lable: 'nuxt', icon: 'lineicons:nuxt' },
  { lable: 'vue', icon: 'carbon:logo-vue' },
  { lable: 'react', icon: 'cib:react' },
])
</script>
