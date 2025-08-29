<template>
  <div class="w-full h-full min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary to-black">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div class="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl animate-pulse delay-500" />
    </div>

    <!-- Floating Tech Bubbles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Tech Bubbles - Right Side -->
      <div class="floating-bubble" style="--delay: 0s; --duration: 8s; --x: 75%; --y: 15%; --size: 70px;">
        <div class="bubble-content">
          <Icon name="mdi:laravel" class="w-6 h-6 text-accent" />
        </div>
      </div>
      <div class="floating-bubble" style="--delay: 2s; --duration: 10s; --x: 85%; --y: 25%; --size: 50px;">
        <div class="bubble-content">
          <Icon name="carbon:logo-vue" class="w-5 h-5 text-accent" />
        </div>
      </div>
      <div class="floating-bubble" style="--delay: 4s; --duration: 12s; --x: 70%; --y: 45%; --size: 60px;">
        <div class="bubble-content">
          <Icon name="cib:react" class="w-5 h-5 text-accent" />
        </div>
      </div>
      <div class="floating-bubble" style="--delay: 1s; --duration: 9s; --x: 90%; --y: 55%; --size: 45px;">
        <div class="bubble-content">
          <Icon name="logos:nodejs-icon" class="w-4 h-4 text-accent" />
        </div>
      </div>
      <div class="floating-bubble" style="--delay: 3s; --duration: 11s; --x: 80%; --y: 70%; --size: 55px;">
        <div class="bubble-content">
          <Icon name="logos:nuxt-icon" class="w-5 h-5 text-accent" />
        </div>
      </div>

      <!-- Tech Bubbles - Left Side of Image -->
      <div class="floating-bubble" style="--delay: 0.5s; --duration: 8.5s; --x: 60%; --y: 42%; --size: 55px;">
        <div class="bubble-content">
          <Icon name="mdi:language-typescript" class="w-5 h-5 text-accent" />
        </div>
      </div>
      <div class="floating-bubble" style="--delay: 2.5s; --duration: 10.5s; --x: 61%; --y: 55%; --size: 55px;">
        <div class="bubble-content">
          <Icon name="mdi:language-javascript" class="w-6 h-6 text-accent" />
        </div>
      </div>
      <div class="floating-bubble" style="--delay: 1.5s; --duration: 9.5s; --x: 60%; --y: 70%; --size: 65px;">
        <div class="bubble-content">
          <Icon name="mdi:git" class="w-5 h-5 text-accent" />
        </div>
      </div>

      <!-- Stats Bubbles -->
      <div class="floating-bubble" style="--delay: 0.5s; --duration: 9.5s; --x: 68%; --y: 10%; --size: 100px;">
        <div class="bubble-content stats-bubble">
          <div class="text-center">
            <div class="text-3xl font-bold text-black">
              4+
            </div>
            <div class="text-sm text-black/70">
              Years
            </div>
          </div>
        </div>
      </div>
      <div class="floating-bubble" style="--delay: 2.5s; --duration: 11.5s; --x: 92%; --y: 30%; --size: 95px;">
        <div class="bubble-content stats-bubble">
          <div class="text-center">
            <div class="text-3xl font-bold text-black">
              6+
            </div>
            <div class="text-sm text-black/70">
              Projects
            </div>
          </div>
        </div>
      </div>
      <div class="floating-bubble" style="--delay: 4.5s; --duration: 13.5s; --x: 68%; --y: 80%; --size: 90px;">
        <div class="bubble-content stats-bubble">
          <div class="text-center">
            <div class="text-3xl font-bold text-black">
              5+
            </div>
            <div class="text-sm text-black/70">
              Skills
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid Layout -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 text-white h-screen lg:min-h-screen pt-16 lg:pt-0">
      <!-- Left Column - Content (Full width on mobile) -->
      <div class="col-span-1 lg:col-span-1 flex items-center lg:justify-center justify-start w-full p-6 sm:p-6 lg:p-12">
        <div class="w-full lg:max-w-lg animate-fade-in">
          <div class="mb-6 lg:mb-8">
            <h2 class="lg:text-2xl text-xl uppercase hidden lg:block mb-4 text-accent font-bold tracking-wider">
              <span class="block w-[200px] min-h-[1.5em] relative">
                <span class="typing top-0 left-0 absolute">{{ currentText }}</span>
                <span class="invisible">software developer</span>
              </span>
            </h2>
          </div>

          <div class="space-y-3 lg:space-y-4 mb-8 lg:mb-12">
            <h1 class="lg:text-8xl text-4xl sm:text-5xl capitalize leading-tight font-black bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent animate-slide-up">
              Hello, I'm
            </h1>
            <h1 class="lg:text-8xl text-4xl sm:text-5xl capitalize leading-tight font-black text-accent animate-slide-up delay-200">
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

      <!-- Right Column - Creative Image Design with Interactive Stats -->
      <div class="col-span-1 lg:col-span-1 flex items-center lg:justify-center w-full p-2 sm:p-6 lg:p-12">
        <div class="w-full max-w-2xl animate-fade-in delay-500">
          <!-- Creative Image Container -->
          <div class="relative group">
            <!-- Main Image with Creative Effects -->
            <div class="relative w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <!-- Glowing Ring Effect -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-dark to-accent animate-spin-slow opacity-30" />
              <div class="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-transparent backdrop-blur-sm" />

              <!-- Main Image -->
              <div class="relative w-full h-full rounded-full bg-gradient-to-br from-accent to-accent-dark p-2">
                <img src="@/assets/images/sandip_img.png" alt="Sandip Ghodasara" class="w-full h-full rounded-full object-cover">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator (Desktop Only) -->
    <div
      v-if="!isMobile"
      ref="scrollIndicator"
      class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0 transition-all duration-500 ease-out"
      :class="{ 'opacity-100': showScrollIndicator }"
    >
      <div class="flex flex-col items-center group cursor-pointer" @click="navigateToDirection('down')">
        <!-- Glowing SCROLL text -->
        <div class="relative">
          <div class="text-lg font-bold text-accent tracking-widest glow-text">
            SCROLL
          </div>
          <!-- Glow effect -->
          <div class="absolute inset-0 text-lg font-bold text-accent/30 tracking-widest blur-sm animate-pulse">
            SCROLL
          </div>
          <!-- Animated arrow -->
          <div class="mt-2 flex justify-center">
            <div class="w-4 h-4 border-r-2 border-b-2 border-accent transform rotate-45 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta Tags
useHead({
  title: 'Sandip Ghodasara - Senior Software Engineer | Home',
  meta: [
    { name: 'description', content: 'Senior Software Engineer specializing in Laravel, Vue.js, React, and Node.js. Crafting high-performance APIs, intuitive admin panels, and AI-powered solutions.' },
    { name: 'keywords', content: 'Software Engineer, Laravel Developer, Vue.js Developer, React Developer, Node.js Developer, Full Stack Developer, API Development, Web Development, Ahmedabad' },
    { property: 'og:title', content: 'Sandip Ghodasara - Senior Software Engineer' },
    { property: 'og:description', content: 'Passionate Software Engineer crafting high-performance APIs, intuitive admin panels, and AI-powered solutions to drive innovation, efficiency, and scalability.' },
    { property: 'og:url', content: 'https://sandipghodasara.com' },
    { name: 'twitter:title', content: 'Sandip Ghodasara - Senior Software Engineer' },
    { name: 'twitter:description', content: 'Passionate Software Engineer crafting high-performance APIs, intuitive admin panels, and AI-powered solutions.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sandipghodasara.com' },
  ],
})

// JSON-LD Structured Data
useSeoMeta({
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Sandip Ghodasara',
      'alternateName': 'Sandip',
      'givenName': 'Sandip',
      'familyName': 'Ghodasara',
      'jobTitle': 'Senior Software Engineer',
      'description': 'Passionate Software Engineer crafting high-performance APIs, intuitive admin panels, and AI-powered solutions.',
      'url': 'https://sandipghodasara.com',
      'telephone': '+919173420297',
      'email': 'ghodasarasandip011@gmail.com',
      'sameAs': [
        'https://linkedin.com/in/sandipghodasara',
        'https://github.com/sandipghodasara',
      ],
      'worksFor': {
        '@type': 'Organization',
        'name': 'Intelivita Private Limited',
        'url': 'https://intelivita.com',
      },
      'knowsAbout': [
        'Laravel',
        'Vue.js',
        'React',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'API Development',
        'Web Development',
        'Full Stack Development',
        'Software Engineering',
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Ahmedabad',
        'addressRegion': 'Gujarat',
        'addressCountry': 'IN',
        'postalCode': '380061',
      },
      'nationality': 'Indian',
      'alumniOf': {
        '@type': 'Organization',
        'name': 'Web Development Education',
      },
      'hasOccupation': {
        '@type': 'Occupation',
        'name': 'Senior Software Engineer',
        'occupationLocation': {
          '@type': 'City',
          'name': 'Ahmedabad',
        },
      },
    }),
  },
})

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

// Use scroll navigation composable
const { handleScrollNavigation, navigateToDirection } = useScrollNavigation()

// Scroll indicator
const scrollIndicator = ref(null)
const showScrollIndicator = ref(false)
const isMobile = ref(false)

// Check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768 || 'ontouchstart' in window
}

// Handle cursor movement (desktop only)
const handleMouseMove = (event) => {
  if (isMobile.value) return

  // Show scroll indicator when cursor is at bottom of page
  const windowHeight = window.innerHeight
  const mouseY = event.clientY

  if (mouseY > windowHeight - 100) {
    showScrollIndicator.value = true
  } else {
    showScrollIndicator.value = false
  }
}

onMounted(() => {
  typeEffect()

  // Check if mobile
  checkMobile()

  // Only setup scroll navigation for desktop
  if (!isMobile.value) {
    const { setupListeners, cleanupListeners } = handleScrollNavigation({
      direction: 'down',
      threshold: 100,
      delay: 500,
    })

    setupListeners()

    // Setup mouse move listener for desktop only
    document.addEventListener('mousemove', handleMouseMove)

    // Store cleanup function for unmount
    onUnmounted(() => {
      cleanupListeners()
      document.removeEventListener('mousemove', handleMouseMove)
    })
  }
})
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

/* Floating Tech Bubbles */
.floating-bubble {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  animation: float var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
}

.bubble-content {
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 153, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 153, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.bubble-content:hover {
  transform: scale(1.2);
  background: rgba(0, 255, 153, 0.2);
  border-color: rgba(0, 255, 153, 0.6);
  box-shadow: 0 0 20px rgba(0, 255, 153, 0.4);
}

.stats-bubble {
  background: #00ff99;
  border: 1px solid #00ff99;
}

.stats-bubble:hover {
  background: #00e187;
  border-color: #00e187;
  box-shadow: 0 0 25px rgba(0, 255, 153, 0.5);
}

/* Floating animation for bubbles and tech icons */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(5deg);
  }
  66% {
    transform: translateY(-10px) rotate(-5deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-bubble {
    display: none;
  }

  /* Ensure content fits on mobile screens */
  .h-screen {
    height: 100vh !important;
    min-height: 100vh !important;
    max-height: 100vh !important;
    overflow: hidden !important;
  }

  /* Reduce spacing for mobile */
  .space-y-1 > * + * {
    margin-top: 0.25rem !important;
  }

  .mb-4 {
    margin-bottom: 1rem !important;
  }

  /* Force single column layout on mobile */
  .grid {
    grid-template-columns: 1fr !important;
  }

  /* Reduce padding on mobile */
  .p-4 {
    padding: 1rem !important;
  }

  .p-2 {
    padding: 0.5rem !important;
  }
}
</style>
