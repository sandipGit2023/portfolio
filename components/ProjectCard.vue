<template>
  <div class="md:text-8xl text-6xl leading-none font-extrabold text-transparent text-outline-style">
    {{ project.num }}
  </div>
  <h2 class="mt-8 md:text-[42px] text-2xl font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize text-white">
    project <span>{{ project.name }}</span>
  </h2>
  <p class="text-white/60 max-w-[500px] py-4">
    {{ project.description }}
  </p>
  <ul class="flex md:gap-4 gap-2 mb-4">
    <li v-for="(stock, index) in project.stock" :key="index" class="text-xl text-accent capitalize">
      {{ stock }}<span v-if="index !== project.stock.length - 1">,</span>
    </li>
  </ul>
  <div class="border border-white/20" />
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
</style>
