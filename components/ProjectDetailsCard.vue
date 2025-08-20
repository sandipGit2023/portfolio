<template>
  <div class="min-h-screen flex flex-col items-start justify-start text-white p-6 lg:p-8">
    <!-- Project Header -->
    <div class="w-full max-w-4xl mb-12">
      <h1 class="text-3xl lg:text-5xl font-bold tracking-wide leading-tight mb-4">
        {{ project.title }}
      </h1>
      <div class="flex items-center gap-4">
        <span class="text-accent text-lg font-medium">{{ project.year }}</span>
        <div class="w-16 h-[2px] bg-accent"></div>
      </div>
    </div>

    <!-- Project Description -->
    <div class="w-full max-w-4xl space-y-8">
      <div
        v-for="(para, index) in project.description"
        :key="index"
        class="text-white/70 text-base lg:text-lg leading-relaxed opacity-0 transition-all duration-700 ease-out"
        :class="{ 'opacity-100 slide-up': typedParagraphs[index] }"
        :style="{ transitionDelay: `${index * 200}ms` }"
      >
        <p class="whitespace-pre-wrap">{{ typedParagraphs[index] }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const typedParagraphs = ref([])
let typingIntervals = []

const typeParagraph = (text, index) => {
  return new Promise((resolve) => {
    let i = 0
    const speed = 25 // Slightly faster typing

    typedParagraphs.value[index] = ''

    if (typingIntervals[index]) clearInterval(typingIntervals[index])

    typingIntervals[index] = setInterval(() => {
      typedParagraphs.value[index] += text[i]
      i++

      if (i >= text.length) {
        clearInterval(typingIntervals[index])
        resolve()
      }
    }, speed)
  })
}

const startTyping = async() => {
  // Clear any existing intervals
  typingIntervals.forEach(clearInterval)
  typingIntervals = []
  typedParagraphs.value = []

  // Type each paragraph sequentially
  for (let i = 0; i < props.project.description.length; i++) {
    await typeParagraph(props.project.description[i], i)
  }
}

watchEffect(startTyping)
</script>

<style scoped>
.slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
