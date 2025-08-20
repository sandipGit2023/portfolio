<template>
  <div class="space-y-8 group">
    <div class="relative">
      <div class="lg:text-9xl text-7xl leading-none font-black text-transparent text-outline-style group-hover:scale-110 transition-transform duration-500">
        {{ project.num }}
      </div>
      <div class="absolute inset-0 lg:text-9xl text-7xl leading-none font-black text-accent/20 group-hover:scale-110 transition-transform duration-500 delay-100">
        {{ project.num }}
      </div>
    </div>

    <h2 class="lg:text-[48px] text-4xl font-black leading-tight group-hover:text-accent transition-all duration-500 capitalize text-white">
      project <span class="text-accent group-hover:scale-110 transition-transform duration-300 inline-block">{{ project.name }}</span>
    </h2>

    <p class="text-white/80 max-w-[300px] lg:max-w-[500px] py-4 text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
      {{ project.description }}
    </p>

    <div class="flex flex-wrap gap-3 mb-8">
      <span
        v-for="(tech, index) in project.stock"
        :key="index"
        class="text-accent text-sm lg:text-base font-bold capitalize px-4 py-2 bg-accent/20 rounded-full border border-accent/30 hover:bg-accent hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
      >
        {{ tech }}
      </span>
    </div>

    <div class="w-full h-[2px] bg-gradient-to-r from-accent via-accent-dark to-transparent group-hover:scale-x-110 transition-transform duration-500 origin-left"></div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.text-outline-style {
  color: transparent;
  -webkit-text-stroke: 2px #fff;
  text-stroke: 2px #fff;
}

.delay-100 {
  animation-delay: 100ms;
}
</style>
