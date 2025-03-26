<template>
  <div class="w-full h-full min-h-screen grid grid-cols-1 md:grid-cols-2 text-white">
    <div class="font-bold text-left flex items-center justify-center w-full p-6">
      <div>
        <h1 class="md:text-7xl text-4xl capitalize my-[20px]">
          About
        </h1>
        <h2 class="md:text-2xl text-lg capitalize">
          <span class="block w-[150px] min-h-[1.5em] relative">
            <span class="typing top-0 left-0 absolute">{{ currentText }}</span>
            <span class="invisible">software developer</span>
          </span>
        </h2>
        <h1 class="text-white/60 max-w-[500px] py-4">
          Passionate Software Engineer crafting high-performance APIs, intuitive admin panels, and AI-powered solutions to drive innovation, efficiency, and scalability.
        </h1>
      </div>
    </div>
    <div class="absolute left-235 bottom-0 top-1/2 -translate-y-1/2 w-[2px] h-[700px] bg-white hidden md:block" />

    <div class="flex items-center justify-center w-full p-6">
      <UTabs
        :items="items"
        size="lg"
        variant="pill"
        class="md:gap-10 gap-4 w-full md:top-60 md:fixed max-w-2xl"
        :ui="{ trigger: 'flex-1', label: 'hidden md:block' }"
      >
        <template #skills="{ }">
          <SkillCard />
        </template>

        <template #education="{ }">
          <ExperienceCard />
        </template>

        <template #about="{ }">
          <AboutCard />
        </template>
      </UTabs>
    </div>
  </div>
</template>

<script setup>
const phrases = ['why hire me?']
const currentText = ref('')
let currentPhrase = 0
let currentChar = 0
let isDeleting = false

const items = [
  {
    label: 'Skills',
    icon: 'i-lucide-user',
    slot: 'skills',
  },
  {
    label: 'experience',
    icon: 'i-lucide-lock',
    slot: 'education',
  },
  {
    label: 'About me',
    icon: 'i-lucide-lock',
    slot: 'about',
  },
]

const typeEffect = () => {
  const phrase = phrases[currentPhrase]
  if (isDeleting) {
    currentText.value = phrase.substring(0, currentChar--)
  } else {
    currentText.value = phrase.substring(0, currentChar++)
  }

  if (!isDeleting && currentChar === phrase.length) {
    setTimeout(() => (isDeleting = true), 1000)
  }
  if (isDeleting && currentChar === 0) {
    isDeleting = false
    currentPhrase = (currentPhrase + 1) % phrases.length
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150)
}

onMounted(() => typeEffect())
</script>

<style scoped>
.typing {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid #fff;
    animation: blink 0.7s infinite;
    transition: width 0.2s ease;
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

span.invisible {
    visibility: hidden;
    pointer-events: none;
}
</style>
