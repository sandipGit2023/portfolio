<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="(stat, index) in stats" :key="index" class="group relative">
      <div class="relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105">
        <div class="text-center">
          <div class="text-4xl lg:text-5xl font-black flex flex-col justify-center items-center gap-2 mb-3">
            <span class="text-accent group-hover:scale-110 transition-transform duration-500 animate-pulse">{{ counters[index] }}</span>
            <span class="text-sm lg:text-base font-bold text-white/80 text-center leading-tight group-hover:text-accent transition-colors duration-300">{{ stat.text }}</span>
          </div>
          <div class="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-dark mx-auto group-hover:w-16 transition-all duration-500 rounded-full" />
        </div>

        <!-- Animated background elements -->
        <div class="absolute top-2 right-2 w-1 h-1 bg-accent/40 rounded-full animate-ping" />
        <div class="absolute bottom-2 left-2 w-1 h-1 bg-accent/60 rounded-full animate-ping delay-1000" />
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { num: 4, text: 'Years of experience' },
  { num: 6, text: 'Projects completed' },
  { num: 5, text: 'Technical expertise' },
]

const counters = ref(stats.map(() => 0))

const duration = 1000

const countUp = (index, target, duration) => {
  const startTime = performance.now()

  const step = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    counters.value[index] = Math.floor(progress * target)

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      counters.value[index] = target
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  stats.forEach((stat, index) => {
    countUp(index, stat.num, duration)
  })
})
</script>
