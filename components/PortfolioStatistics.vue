<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="(stat, index) in stats" :key="index" class="text-center">
      <div class="md:text-6xl text-5xl font-extrabold flex justify-start items-start gap-4">
        <span>{{ counters[index] }}</span>
        <span class="md:text-xl text-lg font-medium text-gray-400 md:max-w-[100px] max-w-[120px] text-left">{{ stat.text }}</span>
      </div>
      <div class="mt-1 w-[35px] h-[1px] bg-white" />
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
