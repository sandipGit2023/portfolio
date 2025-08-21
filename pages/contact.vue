<template>
  <div class="w-full h-full min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary to-black">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div class="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl animate-pulse delay-500" />
    </div>

    <!-- Grid Layout -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 text-white min-h-screen">
      <!-- Left Column - Content -->
      <div class="flex items-center lg:justify-center justify-start w-full p-4 sm:p-6 lg:p-12">
        <div class="max-w-lg animate-fade-in">
          <div class="space-y-4 lg:space-y-6 mb-8 lg:mb-12">
            <h1 class="lg:text-8xl text-5xl sm:text-6xl capitalize leading-tight font-black bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent animate-slide-up">
              Contact
            </h1>
            <h2 class="lg:text-2xl text-xl capitalize mb-4 lg:mb-6 text-accent font-bold tracking-wider">
              <span class="block w-[200px] min-h-[1.5em] relative">
                <span class="typing top-0 left-0 absolute">{{ currentText }}</span>
                <span class="invisible">software developer</span>
              </span>
            </h2>
            <p class="text-white/80 max-w-[500px] py-4 text-base lg:text-lg leading-relaxed animate-slide-up delay-300 mt-4 lg:mt-6">
              Have a project or idea in mind? Let's team up to create intuitive, high-performance solutions that drive results.
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column - Contact Info -->
      <div class="flex items-center justify-center w-full p-4 sm:p-6 lg:p-12">
        <div class="w-full max-w-2xl space-y-6 lg:space-y-8 animate-scale-in">
          <!-- Phone -->
          <div class="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105">
            <div class="flex items-center gap-4 lg:gap-6">
              <div class="relative">
                <div class="text-accent p-3 lg:p-4 bg-accent/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <IconsPhone class="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div class="absolute inset-0 bg-accent/30 rounded-full animate-ping opacity-20" />
              </div>
              <div>
                <p class="text-white/60 text-xs lg:text-sm font-medium uppercase tracking-wider mb-1 lg:mb-2">
                  Phone
                </p>
                <p class="font-bold text-lg lg:text-xl text-white group-hover:text-accent transition-colors duration-300">
                  (+91) 917 342 0297
                </p>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105">
            <div class="flex items-center gap-4 lg:gap-6">
              <div class="relative">
                <div class="text-accent p-3 lg:p-4 bg-accent/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <IconsEmail class="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div class="absolute inset-0 bg-accent/30 rounded-full animate-ping opacity-20 delay-300" />
              </div>
              <div>
                <p class="text-white/60 text-xs lg:text-sm font-medium uppercase tracking-wider mb-1 lg:mb-2">
                  Email
                </p>
                <p class="font-bold text-sm lg:text-lg text-white group-hover:text-accent transition-colors duration-300 break-all">
                  ghodasarasandip011@gmail.com
                </p>
              </div>
            </div>
          </div>

          <!-- Address -->
          <div class="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105">
            <div class="flex items-center gap-4 lg:gap-6">
              <div class="relative">
                <div class="text-accent p-3 lg:p-4 bg-accent/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <IconsLocation class="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div class="absolute inset-0 bg-accent/30 rounded-full animate-ping opacity-20 delay-700" />
              </div>
              <div>
                <p class="text-white/60 text-xs lg:text-sm font-medium uppercase tracking-wider mb-1 lg:mb-2">
                  Address
                </p>
                <p class="font-bold text-lg lg:text-xl text-white group-hover:text-accent transition-colors duration-300">
                  Gota, Ahmedabad, Gujarat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-10 right-10 w-4 h-4 bg-accent rounded-full animate-bounce" />
    <div class="absolute bottom-20 left-10 w-3 h-3 bg-accent/60 rounded-full animate-bounce delay-1000" />
    <div class="absolute top-1/3 left-1/4 w-2 h-2 bg-accent/40 rounded-full animate-bounce delay-500" />
  </div>
</template>

<script setup>
const phrases = ['let\'s work together']
const currentText = ref('')
let currentPhrase = 0
let currentChar = 0
let isDeleting = false

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

.delay-700 {
  animation-delay: 700ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style>
