<template>
  <div class="w-full h-full min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary to-black">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div class="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl animate-pulse delay-500" />
    </div>

    <!-- Grid Layout -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 text-white min-h-screen">
      <!-- Left Column - Content -->
      <div class="flex items-center lg:justify-center justify-start w-full p-4 sm:p-6 lg:p-12">
        <div class="max-w-lg animate-fade-in">
          <div class="mb-6 lg:mb-8">
            <h2 class="lg:text-2xl text-xl uppercase hidden lg:block mb-4 text-accent font-bold tracking-wider">
              <span class="block w-[200px] min-h-[1.5em] relative">
                <span class="typing top-0 left-0 absolute">{{ currentText }}</span>
                <span class="invisible">software developer</span>
              </span>
            </h2>
          </div>

          <div class="space-y-3 lg:space-y-4 mb-8 lg:mb-12">
            <h1 class="lg:text-8xl text-5xl sm:text-6xl capitalize leading-tight font-black bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent animate-slide-up">
              Hello, I'm
            </h1>
            <h1 class="lg:text-8xl text-5xl sm:text-6xl capitalize leading-tight font-black text-accent animate-slide-up delay-200">
              Sandip
            </h1>
          </div>

          <h2 class="lg:text-2xl text-xl uppercase block lg:hidden mt-4 lg:mt-6 mb-6 lg:mb-8 text-accent font-bold">
            <span class="block w-[200px] min-h-[1.5em] relative">
              <span class="typing top-0 left-0 absolute">{{ currentText }}</span>
              <span class="invisible">software developer</span>
            </span>
          </h2>

          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 lg:mt-20 mt-8 lg:mt-12">
            <NuxtLink
              href="/cv/Sandip_Ghodasara_Int_new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sandip_Ghodasara_CV.pdf"
              class="group relative overflow-hidden border-2 border-white text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-full hover:bg-accent-hover hover:border-accent hover:text-black transition-all duration-500 cursor-pointer text-sm uppercase tracking-wider hover:shadow-glow w-full sm:w-auto text-center flex items-center justify-center mobile-button-primary"
            >
              <span class="relative z-10">Download CV</span>
              <Icon name="prime:download" class="relative z-10 w-5 h-5 ml-2" />
            </NuxtLink>

            <div class="hidden sm:block mx-4 w-[20px] h-[1px] bg-white/30" />

            <div class="flex gap-3 lg:gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <NuxtLink
                to="https://github.com/sandipGit2023"
                target="_blank"
                class="group relative overflow-hidden border-2 border-white text-white font-bold w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full hover:bg-accent-hover hover:border-accent hover:text-black transition-all duration-500 cursor-pointer hover:shadow-glow flex-shrink-0 mobile-button-secondary social-button"
              >
                <Icon name="prime:github" class="w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-110 transition-all duration-300" />
              </NuxtLink>
              <NuxtLink
                to="https://linkedin.com/in/ghodasara-sandip"
                target="_blank"
                class="group relative overflow-hidden border-2 border-white text-white font-bold w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full hover:bg-accent-hover hover:border-accent hover:text-black transition-all duration-500 cursor-pointer hover:shadow-glow flex-shrink-0 mobile-button-secondary social-button"
              >
                <Icon
                  name="basil:linkedin-solid"
                  class="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-all duration-300"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Image & Stats Only -->
      <div class="flex items-center lg:justify-center w-full p-4 sm:p-6 lg:p-12">
        <div class="w-full max-w-2xl animate-fade-in delay-500">
          <!-- Profile Image -->
          <div class="flex items-center justify-center mb-6 lg:mb-8">
            <div class="relative">
              <div class="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-accent to-accent-dark p-1 animate-pulse">
                <img src="@/assets/images/sandip_img.png" alt="Sandip Ghodasara" class="w-full h-full rounded-full object-cover">
              </div>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
            <!-- Experience Card -->
            <div class="group relative">
              <div class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 lg:p-6 hover:bg-accent/20 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div class="text-center">
                  <div class="text-3xl lg:text-4xl font-black text-accent mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-500">
                    4+
                  </div>
                  <div class="text-xs lg:text-sm font-bold text-white/80 uppercase tracking-wider">
                    Years of Experience
                  </div>
                  <div class="w-8 lg:w-12 h-1 bg-accent mx-auto mt-2 lg:mt-3 group-hover:w-12 lg:group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </div>

            <!-- Projects Card -->
            <div class="group relative">
              <div class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 lg:p-6 hover:bg-accent/20 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div class="text-center">
                  <div class="text-3xl lg:text-4xl font-black text-accent mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-500">
                    6+
                  </div>
                  <div class="text-xs lg:text-sm font-bold text-white/80 uppercase tracking-wider">
                    Projects Completed
                  </div>
                  <div class="w-8 lg:w-12 h-1 bg-accent mx-auto mt-2 lg:mt-3 group-hover:w-12 lg:group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </div>

            <!-- Skills Card -->
            <div class="group relative">
              <div class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 lg:p-6 hover:bg-accent/20 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div class="text-center">
                  <div class="text-3xl lg:text-4xl font-black text-accent mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-500">
                    5+
                  </div>
                  <div class="text-xs lg:text-sm font-bold text-white/80 uppercase tracking-wider">
                    Tech<br>Expertise
                  </div>
                  <div class="w-8 lg:w-12 h-1 bg-accent mx-auto mt-2 lg:mt-3 group-hover:w-12 lg:group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-10 right-10 w-4 h-4 bg-accent rounded-full animate-bounce" />
    <div class="absolute bottom-20 left-10 w-3 h-3 bg-accent/60 rounded-full animate-bounce delay-1000" />
    <div class="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/40 rounded-full animate-bounce delay-500" />
  </div>
</template>

<script setup>
const phrases = ['software developer']
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
/* Typing animation styles */
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

.delay-200 {
  animation-delay: 200ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style>
