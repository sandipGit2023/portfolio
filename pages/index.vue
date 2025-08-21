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
            <div class="flex md:hidden flex-row gap-3 w-full justify-start">
              <NuxtLink
                href="/cv/Sandip_Ghodasara_Int_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sandip_Ghodasara_CV.pdf"
                class="group relative overflow-hidden border-2 border-white text-white font-bold w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full hover:bg-accent-hover hover:border-accent hover:text-black transition-all duration-500 cursor-pointer hover:shadow-glow flex-shrink-0 mobile-button-secondary social-button"
              >
                <Icon name="prime:download" class="w-6 h-6 lg:w-8 lg:h-8 group-hover:scale-110 transition-all duration-300" />
              </NuxtLink>
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

            <NuxtLink
              href="/cv/Sandip_Ghodasara_Int_new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sandip_Ghodasara_CV.pdf"
              class="hidden md:flex group relative overflow-hidden border-2 border-white text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-full hover:bg-accent-hover hover:border-accent hover:text-black transition-all duration-500 cursor-pointer text-sm uppercase tracking-wider hover:shadow-glow w-full sm:w-auto text-center flex items-center justify-center mobile-button-primary"
            >
              <span class="relative z-10">Download CV</span>
              <Icon name="prime:download" class="relative z-10 w-5 h-5 ml-2" />
            </NuxtLink>

            <div class="hidden sm:block mx-4 w-[20px] h-[1px] bg-white/30" />

            <div class="hidden md:flex gap-3 lg:gap-4 w-full sm:w-auto justify-center sm:justify-start">
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

      <!-- Right Column - Enhanced Profile & Stats -->
      <div class="flex items-center lg:justify-center w-full p-4 sm:p-6 lg:p-12">
        <div class="w-full max-w-2xl animate-fade-in delay-500">
          <!-- Dopamine-Releasing Hero Section -->
          <div class="relative">
            <!-- Animated Background Particles -->
            <div class="absolute inset-0 overflow-hidden">
              <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping opacity-60"></div>
              <div class="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/80 rounded-full animate-bounce delay-1000"></div>
              <div class="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-500"></div>
              <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-bounce delay-2000"></div>
            </div>

            <!-- Main Hero Card -->
            <div class="relative group">
              <!-- 3D Floating Card Effect -->
              <div class="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 transform transition-all duration-700 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-accent/20">

                <!-- Profile Section -->
                <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  <!-- Animated Profile Image -->
                  <div class="relative">
                    <div class="relative w-32 h-32 lg:w-40 lg:h-40">
                      <!-- Glowing Ring Effect -->
                      <div class="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-dark to-accent animate-spin-slow opacity-30"></div>
                      <div class="absolute inset-2 rounded-full bg-gradient-to-br from-accent/20 to-transparent backdrop-blur-sm"></div>

                      <!-- Main Image -->
                      <div class="relative w-full h-full rounded-full bg-gradient-to-br from-accent to-accent-dark p-1 animate-pulse">
                        <img src="@/assets/images/sandip_img.png" alt="Sandip Ghodasara" class="w-full h-full rounded-full object-cover">
                      </div>

                      <!-- Floating Tech Icons -->
                      <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
                        <Icon name="mdi:laravel" class="w-4 h-4 text-accent" />
                      </div>
                      <div class="absolute -bottom-2 -left-2 w-8 h-8 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float delay-1000">
                        <Icon name="carbon:logo-vue" class="w-4 h-4 text-accent" />
                      </div>
                      <div class="absolute top-1/2 -right-4 w-6 h-6 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float delay-500">
                        <Icon name="cib:react" class="w-3 h-3 text-accent" />
                      </div>
                    </div>
                  </div>

                  <!-- Content Section -->
                  <div class="flex-1 text-center lg:text-left">
                    <div class="space-y-6">
                      <!-- Animated Progress Bars -->
                      <div class="space-y-4">
                        <div class="group">
                          <div class="flex justify-between items-center mb-2">
                            <span class="text-white/80 text-sm font-medium">Experience</span>
                            <span class="text-accent text-sm font-bold group-hover:scale-110 transition-transform">4+ Years</span>
                          </div>
                          <div class="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark rounded-full transform transition-all duration-1000 group-hover:scale-x-110" style="width: 85%"></div>
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>

                        <div class="group">
                          <div class="flex justify-between items-center mb-2">
                            <span class="text-white/80 text-sm font-medium">Projects</span>
                            <span class="text-accent text-sm font-bold group-hover:scale-110 transition-transform">6+ Completed</span>
                          </div>
                          <div class="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark rounded-full transform transition-all duration-1000 group-hover:scale-x-110" style="width: 90%"></div>
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>

                        <div class="group">
                          <div class="flex justify-between items-center mb-2">
                            <span class="text-white/80 text-sm font-medium">Skills</span>
                            <span class="text-accent text-sm font-bold group-hover:scale-110 transition-transform">5+ Technologies</span>
                          </div>
                          <div class="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark rounded-full transform transition-all duration-1000 group-hover:scale-x-110" style="width: 95%"></div>
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 lg:mt-12">
                  <NuxtLink
                    to="/work"
                    class="group relative overflow-hidden bg-gradient-to-r from-accent to-accent-dark text-black font-bold py-3 px-8 rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-accent/30"
                  >
                    <span class="relative z-10">View My Work</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </NuxtLink>
                  <NuxtLink
                    to="/contact"
                    class="group relative overflow-hidden border-2 border-accent text-accent font-bold py-3 px-8 rounded-full hover:bg-accent hover:text-black transform transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-accent/30"
                  >
                    <span class="relative z-10">Get In Touch</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Elements -->
    <!-- <div class="absolute top-10 right-10 w-4 h-4 bg-accent rounded-full animate-bounce" />
    <div class="absolute bottom-20 left-10 w-3 h-3 bg-accent/60 rounded-full animate-bounce delay-1000" />
    <div class="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/40 rounded-full animate-bounce delay-500" /> -->
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
