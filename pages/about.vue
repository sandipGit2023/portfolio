<template>
  <div class="w-full h-full min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary to-black">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div class="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl animate-pulse delay-500" />
    </div>

    <!-- Grid Layout -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 text-white min-h-screen">
      <!-- Left Column - Content -->
      <div class="flex items-center lg:justify-center justify-start w-full p-6 lg:p-12">
        <div class="max-w-lg animate-fade-in">
          <div class="space-y-6 mb-12">
            <h1 class="lg:text-8xl text-6xl capitalize leading-tight font-black bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent animate-slide-up">
              About
            </h1>
            <h2 class="lg:text-2xl text-lg capitalize mb-6 text-accent font-bold tracking-wider">
              <span class="block w-[200px] min-h-[1.5em] relative">
                <span class="typing top-0 left-0 absolute">{{ currentText }}</span>
                <span class="invisible">software developer</span>
              </span>
            </h2>
            <p class="text-white/80 max-w-[500px] py-4 text-lg leading-relaxed animate-slide-up delay-300">
              Passionate Software Engineer crafting high-performance APIs, intuitive admin panels, and AI-powered solutions to drive innovation, efficiency, and scalability.
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column - Tabs -->
      <div class="flex items-center justify-center w-full p-6 lg:p-12">
        <div class="w-full max-w-4xl animate-scale-in">
          <UTabs
            :items="items"
            size="lg"
            variant="pill"
            class="gap-6 lg:gap-10 w-full"
            :ui="{
              trigger: 'flex-1 text-sm lg:text-base font-medium',
              label: 'hidden lg:block',
              list: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-glow',
            }"
          >
            <template #skills="{ }">
              <div class="mt-8 animate-fade-in">
                <SkillCard />
              </div>
            </template>

            <template #education="{ }">
              <div class="mt-8 animate-fade-in">
                <ExperienceCard />
              </div>
            </template>
          </UTabs>
        </div>
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-10 left-10 w-4 h-4 bg-accent rounded-full animate-bounce" />
    <div class="absolute bottom-20 right-10 w-3 h-3 bg-accent/60 rounded-full animate-bounce delay-1000" />
    <div class="absolute top-1/3 left-1/4 w-2 h-2 bg-accent/40 rounded-full animate-bounce delay-500" />
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
    icon: 'i-lucide-lightbulb',
    slot: 'skills',
  },
  {
    label: 'experience',
    icon: 'i-lucide-badge-check',
    slot: 'education',
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
  border-right: 3px solid #00ff99;
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

/* Custom animations */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-scale-in {
  animation: scaleIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style>
