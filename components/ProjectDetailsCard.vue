<template>
  <div class="md:min-h-screen min-h-[500px] flex flex-col items-center justify-start text-white md:p-4">
    <div class="md:block top-40 hidden flex-col fixed max-w-2xl text-left">
      <h1 class="text-4xl font-bold tracking-wide">
        {{ project.title }}
      </h1>
      <span class="block mt-4 text-sm text-accent">{{ project.year }}</span>
    </div>
    <div class="max-w-2xl text-left space-y-6 md:mt-70">
      <div
        v-for="(para, index) in project.description"
        :key="index"
        class="md:text-lg text-sm leading-relaxed opacity-0 whitespace-pre-wrap transition-transform duration-500 ease-in-out"
        :class="{ 'fade-in': typedParagraphs[index], 'slide-in': typedParagraphs[index] }"
      >
        <span class="typing">{{ typedParagraphs[index] }}</span>
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
    const speed = 30

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
  typingIntervals.forEach(clearInterval)
  typingIntervals = []
  typedParagraphs.value = []

  for (let i = 0; i < props.project.description.length; i++) {
    await typeParagraph(props.project.description[i], i)
  }
}

watchEffect(startTyping)
</script>

<style scoped>
.opacity-0 {
  opacity: 0;
}

.fade-in {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.typing {
  display: inline-block;
  white-space: pre-wrap;
}

.slide-in {
  transform: translateY(10px);
  opacity: 1;
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}
</style>
