<template>
  <div class="w-full h-full min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary to-black">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div class="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl animate-pulse delay-500" />
    </div>

    <!-- Grid Layout -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 text-white min-h-screen lg:h-screen pt-16 lg:pt-0">
      <!-- Left Column - Content (Full width on mobile) -->
      <div class="col-span-1 lg:col-span-1 flex items-center lg:justify-center justify-start w-full p-6 sm:p-6 lg:p-12">
        <div class="creative-left-section">
          <!-- Floating Background Elements -->
          <div class="floating-bg-elements">
            <div class="floating-orb orb-1"></div>
            <div class="floating-orb orb-2"></div>
            <div class="floating-orb orb-3"></div>
            <div class="floating-line line-1"></div>
            <div class="floating-line line-2"></div>
          </div>

          <div class="w-full max-w-full lg:max-w-lg animate-fade-in relative z-10">
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
              <span class="block w-[200px] max-h-[1.5em] md:min-h-[1.5em] relative">
                <span class="typing top-0 left-0 absolute">{{ currentText }}</span>
                <span class="invisible">software developer</span>
              </span>
            </h2>

                        <!-- Creative Tech Stats Section -->
            <div class="creative-tech-section mt-8 lg:mt-12">
              <!-- Floating Tech Header -->
              <div class="floating-tech-header p-0">
                <span class="creative-tech-label">Experience Overview</span>
                <div class="creative-tech-count">3</div>
              </div>

              <!-- Creative Tech Grid -->
              <div class="creative-tech-grid">
                <div class="creative-tech-badge" style="--delay: 0ms">
                  <div class="creative-badge-content">
                    <span class="creative-tech-icon">4+</span>
                    <span class="creative-tech-name">Years Exp</span>
                  </div>
                  <div class="creative-badge-glow"></div>
                  <div class="creative-badge-particles">
                    <div class="creative-particle"></div>
                    <div class="creative-particle"></div>
                  </div>
                  <div class="creative-badge-magnetic"></div>
                </div>
                <div class="creative-tech-badge" style="--delay: 120ms">
                  <div class="creative-badge-content">
                    <span class="creative-tech-icon">6+</span>
                    <span class="creative-tech-name">Projects</span>
                  </div>
                  <div class="creative-badge-glow"></div>
                  <div class="creative-badge-particles">
                    <div class="creative-particle"></div>
                    <div class="creative-particle"></div>
                  </div>
                  <div class="creative-badge-magnetic"></div>
                </div>
                <div class="creative-tech-badge" style="--delay: 240ms">
                  <div class="creative-badge-content">
                    <span class="creative-tech-icon">5+</span>
                    <span class="creative-tech-name">Skills</span>
                  </div>
                  <div class="creative-badge-glow"></div>
                  <div class="creative-badge-particles">
                    <div class="creative-particle"></div>
                    <div class="creative-particle"></div>
                  </div>
                  <div class="creative-badge-magnetic"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Creative Image Design with Social Buttons -->
      <div class="col-span-1 lg:col-span-1 flex items-center lg:justify-center w-full p-2 sm:p-6 lg:p-12">
        <div class="w-full max-w-2xl animate-fade-in delay-500">
          <!-- Creative Image Container -->
          <div class="relative group mb-8">
            <!-- Main Image with Creative Effects -->
            <div class="relative w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <!-- Outer Glowing Ring Effect -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-dark to-accent animate-spin-slow opacity-30" />
              <div class="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-transparent backdrop-blur-sm" />

              <!-- Middle Ring with Pulse Effect -->
              <div class="absolute inset-8 rounded-full border-2 border-accent/40 animate-pulse" />

              <!-- Inner Glow Ring -->
              <div class="absolute inset-12 rounded-full bg-gradient-to-br from-accent/30 to-transparent" />

              <!-- Main Image Container -->
              <div class="relative w-full h-full rounded-full bg-gradient-to-br from-accent to-accent-dark p-2 group-hover:p-3 transition-all duration-500">
                <img src="@/assets/images/sandip_img.png" alt="Sandip Ghodasara" class="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500">

                <!-- Image Overlay Effects -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <!-- Floating Particles around image -->
                <div class="absolute inset-0 rounded-full overflow-hidden">
                  <div class="floating-particle particle-1"></div>
                  <div class="floating-particle particle-2"></div>
                  <div class="floating-particle particle-3"></div>
                  <div class="floating-particle particle-4"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Buttons Section -->
          <div class="social-buttons-container mb-10">
            <!-- Download CV Button -->
            <div class="cv-button-wrapper mt-2 md:mt-10">
              <NuxtLink
                href="/cv/Sandip_Ghodasara_Int_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sandip_Ghodasara_CV.pdf"
                class="cv-button group"
              >
                <div class="button-content">
                  <span class="button-text">Download CV</span>
                  <Icon name="prime:download" class="button-icon" />
                </div>
                <div class="button-glow"></div>
                <div class="button-particles">
                  <div class="particle"></div>
                  <div class="particle"></div>
                  <div class="particle"></div>
                </div>
                <div class="button-ripple"></div>
                <div class="button-shine"></div>
              </NuxtLink>
            </div>

            <!-- Social Icons -->
            <div class="social-icons-container mt-2 md:mt-10">
              <div class="social-icon-wrapper">
                <NuxtLink
                  to="https://github.com/sandipGit2023"
                  target="_blank"
                  class="social-icon github-icon"
                >
                  <Icon name="prime:github" class="icon" />
                  <div class="icon-glow"></div>
                  <div class="icon-ripple"></div>
                  <div class="icon-particles">
                    <div class="icon-particle"></div>
                    <div class="icon-particle"></div>
                  </div>
                </NuxtLink>
              </div>
              <div class="social-icon-wrapper">
                <NuxtLink
                  to="https://linkedin.com/in/ghodasara-sandip"
                  target="_blank"
                  class="social-icon linkedin-icon"
                >
                  <Icon name="basil:linkedin-solid" class="icon" />
                  <div class="icon-glow"></div>
                  <div class="icon-ripple"></div>
                  <div class="icon-particles">
                    <div class="icon-particle"></div>
                    <div class="icon-particle"></div>
                  </div>
                </NuxtLink>
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

/* Custom spin animation for image effects */
.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Creative Tech Stats Section */
.creative-tech-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

/* Floating Tech Header */
.floating-tech-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;
}

.creative-tech-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.floating-tech-header:hover .creative-tech-label {
  color: #00ff99;
  text-shadow: 0 0 10px rgba(0, 255, 153, 0.3);
}


/* Creative Left Section */
.creative-left-section {
  position: relative;
  padding: 4rem;
  min-height: 400px;
  overflow: hidden;
}

/* Floating Background Elements */
.floating-bg-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.floating-orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 153, 0.1), transparent);
  animation: floatOrb 6s ease-in-out infinite;
}

.orb-1 {
  width: 120px;
  height: 120px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.orb-3 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.floating-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 153, 0.3), transparent);
  animation: floatLine 8s ease-in-out infinite;
}

.line-1 {
  width: 2px;
  height: 100px;
  top: 30%;
  right: 25%;
  animation-delay: 1s;
}

.line-2 {
  width: 100px;
  height: 2px;
  bottom: 40%;
  left: 5%;
  animation-delay: 3s;
}

@keyframes floatOrb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(20px, -30px) scale(1.2);
    opacity: 0.6;
  }
}

@keyframes floatLine {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: translate(10px, -15px) rotate(5deg);
    opacity: 0.5;
  }
}

/* Creative Tech Stats Section */
.creative-tech-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

/* Floating Tech Header */
.floating-tech-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;
}

.creative-tech-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.floating-tech-header:hover .creative-tech-label {
  color: #00ff99;
  text-shadow: 0 0 10px rgba(0, 255, 153, 0.3);
}

.creative-tech-count {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.3), rgba(0, 255, 153, 0.15));
  color: #00ff99;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  border: 2px solid rgba(0, 255, 153, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 20px rgba(0, 255, 153, 0.2);
  text-shadow: 0 0 10px rgba(0, 255, 153, 0.5);
}

.creative-tech-count:hover {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.5), rgba(0, 255, 153, 0.3));
  border-color: #00ff99;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 255, 153, 0.2);
}

/* Creative Tech Grid */
.creative-tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  position: relative;
}

/* Creative Tech Badge */
.creative-tech-badge {
  position: relative;
  animation: creativeSlideIn 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px) scale(0.8);
  animation-delay: var(--delay);
  cursor: pointer;
}

@keyframes creativeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.8) rotate(-5deg);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-8px) scale(1.1) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

.creative-badge-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* CRAZY HOVER EFFECTS */
.creative-tech-badge:hover .creative-badge-content {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.25), rgba(0, 255, 153, 0.12));
  border-color: rgba(0, 255, 153, 0.6);
  transform: translateY(-8px) scale(1.1) rotate(3deg);
  box-shadow: 0 25px 60px rgba(0, 255, 153, 0.4), 0 0 50px rgba(0, 255, 153, 0.3);
  animation: crazyShake 0.6s ease-in-out;
}

@keyframes crazyShake {
  0%, 100% { transform: translateY(-8px) scale(1.1) rotate(3deg); }
  25% { transform: translateY(-8px) scale(1.1) rotate(-2deg); }
  50% { transform: translateY(-8px) scale(1.1) rotate(5deg); }
  75% { transform: translateY(-8px) scale(1.1) rotate(-1deg); }
}

.creative-badge-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 255, 153, 0.2), transparent);
  border-radius: 1rem;
  opacity: 0;
  filter: blur(20px);
  transition: all 0.4s ease;
}

.creative-tech-badge:hover .creative-badge-glow {
  opacity: 0.6;
  filter: blur(8px);
  transform: scale(1.05);
  animation: pulseGlow 1s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.6; transform: scale(1.05); }
  50% { opacity: 0.4; transform: scale(1.08); }
}

.creative-badge-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: 1rem;
  overflow: hidden;
}

.creative-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00ff99;
  border-radius: 50%;
  opacity: 0;
  animation: creativeParticleFloat 3s ease-out infinite;
}

.creative-tech-badge:hover .creative-particle {
  animation: crazyParticleFloat 1.5s ease-out infinite;
}

@keyframes crazyParticleFloat {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0) rotate(0deg);
  }
  25% {
    opacity: 1;
    transform: translateY(-20px) scale(1.2) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translateY(-40px) scale(0.8) rotate(180deg);
  }
  75% {
    opacity: 0.8;
    transform: translateY(-60px) scale(1.1) rotate(270deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-80px) scale(0) rotate(360deg);
  }
}

.creative-particle:nth-child(1) {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.creative-particle:nth-child(2) {
  top: 70%;
  right: 20%;
  animation-delay: 0.5s;
}

/* Magnetic Effect */
.creative-badge-magnetic {
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  background: radial-gradient(circle at var(--mouse-x, center) var(--mouse-y, center),
              rgba(0, 255, 153, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.creative-tech-badge:hover .creative-badge-magnetic {
  opacity: 1;
  animation: magneticPulse 2s ease-in-out infinite;
}

@keyframes magneticPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

/* Creative Tech Icon */
.creative-tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.3), rgba(0, 255, 153, 0.15));
  color: #00ff99;
  font-size: 0.875rem;
  font-weight: 800;
  border-radius: 0.5rem;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 255, 153, 0.3);
  text-shadow: 0 0 10px rgba(0, 255, 153, 0.5);
}

.creative-tech-badge:hover .creative-tech-icon {
  background: linear-gradient(135deg, #00ff99, rgba(0, 255, 153, 0.9));
  color: #000;
  transform: scale(1.2) rotate(5deg);
  box-shadow: 0 8px 25px rgba(0, 255, 153, 0.5);
  animation: iconSpin 0.8s ease-in-out;
}

@keyframes iconSpin {
  0% { transform: scale(1.2) rotate(5deg); }
  50% { transform: scale(1.3) rotate(185deg); }
  100% { transform: scale(1.2) rotate(365deg); }
}

/* Creative Tech Name */
.creative-tech-name {
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.4s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.creative-tech-badge:hover .creative-tech-name {
  color: #00ff99;
  font-weight: 700;
  text-shadow: 0 0 15px rgba(0, 255, 153, 0.6);
  animation: textGlow 1s ease-in-out infinite;
}

@keyframes textGlow {
  0%, 100% { text-shadow: 0 0 15px rgba(0, 255, 153, 0.6); }
  50% { text-shadow: 0 0 25px rgba(0, 255, 153, 0.8), 0 0 35px rgba(0, 255, 153, 0.4); }
}

/* Creative Tech Badge */
.creative-tech-badge {
  position: relative;
  animation: creativeSlideIn 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px) scale(0.8);
  animation-delay: var(--delay);
}

@keyframes creativeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.8) rotate(-5deg);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-8px) scale(1.1) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

.creative-badge-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(12px);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.creative-tech-badge:hover .creative-badge-content {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.25), rgba(0, 255, 153, 0.12));
  border-color: rgba(0, 255, 153, 0.6);
  transform: translateY(-6px) scale(1.08) rotate(2deg);
  box-shadow: 0 20px 50px rgba(0, 255, 153, 0.4), 0 0 40px rgba(0, 255, 153, 0.3);
}

.creative-badge-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 255, 153, 0.2), transparent);
  border-radius: 1rem;
  opacity: 0;
  filter: blur(20px);
  transition: all 0.4s ease;
}

.creative-tech-badge:hover .creative-badge-glow {
  opacity: 1;
  filter: blur(25px);
}

.creative-badge-ripple {
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  border: 3px solid transparent;
  opacity: 0;
  transition: all 0.5s ease;
}

.creative-tech-badge:hover .creative-badge-ripple {
  border-color: rgba(0, 255, 153, 0.4);
  opacity: 1;
  transform: scale(1.3);
}

.creative-badge-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: 1rem;
  overflow: hidden;
}

.creative-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00ff99;
  border-radius: 50%;
  opacity: 0;
  animation: creativeParticleFloat 3s ease-out infinite;
}

.creative-particle:nth-child(1) {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.creative-particle:nth-child(2) {
  top: 70%;
  right: 20%;
  animation-delay: 1.5s;
}

@keyframes creativeParticleFloat {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-15px) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) scale(0);
  }
}

/* Creative Tech Icon */
.creative-tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.3), rgba(0, 255, 153, 0.15));
  color: #00ff99;
  font-size: 0.875rem;
  font-weight: 800;
  border-radius: 0.5rem;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 255, 153, 0.3);
  text-shadow: 0 0 10px rgba(0, 255, 153, 0.5);
}

.creative-tech-badge:hover .creative-tech-icon {
  background: linear-gradient(135deg, #00ff99, rgba(0, 255, 153, 0.9));
  color: #000;
  transform: scale(1.2) rotate(5deg);
  box-shadow: 0 8px 25px rgba(0, 255, 153, 0.5);
}

/* Creative Tech Name */
.creative-tech-name {
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.4s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.creative-tech-badge:hover .creative-tech-name {
  color: #00ff99;
  font-weight: 700;
  text-shadow: 0 0 15px rgba(0, 255, 153, 0.6);
}

/* Social Buttons Container */
.social-buttons-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

/* CV Button Styles */
.cv-button-wrapper {
  position: relative;
}

.cv-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.cv-button:hover {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.25), rgba(0, 255, 153, 0.15));
  border-color: #00ff99;
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 255, 153, 0.4), 0 0 40px rgba(0, 255, 153, 0.2);
}

.button-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;
}

.button-text {
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.button-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: all 0.3s ease;
}

.cv-button:hover .button-icon {
  transform: translateX(3px) scale(1.1);
}

.button-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 255, 153, 0.2), transparent);
  border-radius: 50px;
  opacity: 0;
  transition: all 0.4s ease;
}

.cv-button:hover .button-glow {
  opacity: 1;
}

.button-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00ff99;
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat 2s ease-out infinite;
}

.particle:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  top: 60%;
  right: 15%;
  animation-delay: 0.5s;
}

.particle:nth-child(3) {
  bottom: 30%;
  left: 50%;
  animation-delay: 1s;
}

@keyframes particleFloat {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-20px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-40px) scale(0);
  }
}

/* Social Icons Container */
.social-icons-container {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.social-icon-wrapper {
  position: relative;
}

.social-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.social-icon:hover {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.2), rgba(0, 255, 153, 0.1));
  border-color: #00ff99;
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 15px 30px rgba(0, 255, 153, 0.3);
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.social-icon:hover .icon {
  transform: scale(1.2);
}

.icon-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 255, 153, 0.3), transparent);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease;
}

.social-icon:hover .icon-glow {
  opacity: 1;
}

.icon-ripple {
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease;
}

.social-icon:hover .icon-ripple {
  border-color: #00ff99;
  opacity: 1;
  transform: scale(1.3);
}

.icon-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.icon-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00ff99;
  border-radius: 50%;
  opacity: 0;
  animation: iconParticleFloat 2s ease-out infinite;
}

.icon-particle:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.icon-particle:nth-child(2) {
  top: 60%;
  right: 15%;
  animation-delay: 0.5s;
}

@keyframes iconParticleFloat {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-10px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px) scale(0);
  }
}

/* Floating Particles around Image */
.floating-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #00ff99;
  border-radius: 50%;
  opacity: 0.6;
  animation: floatAround 4s ease-in-out infinite;
}

.particle-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  top: 20%;
  right: 15%;
  animation-delay: 1s;
}

.particle-3 {
  bottom: 30%;
  left: 20%;
  animation-delay: 2s;
}

.particle-4 {
  bottom: 15%;
  right: 10%;
  animation-delay: 3s;
}

@keyframes floatAround {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  25% {
    transform: translate(20px, -15px) scale(1.2);
    opacity: 1;
  }
  50% {
    transform: translate(-10px, -25px) scale(0.8);
    opacity: 0.8;
  }
  75% {
    transform: translate(-20px, 10px) scale(1.1);
    opacity: 0.9;
  }
}

/* Enhanced Button Effects */
.button-ripple {
  position: absolute;
  inset: 0;
  border-radius: 50px;
  border: 2px solid transparent;
  opacity: 0;
  transition: all 0.4s ease;
}

.cv-button:hover .button-ripple {
  border-color: rgba(0, 255, 153, 0.5);
  opacity: 1;
  transform: scale(1.1);
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.cv-button:hover .button-shine {
  left: 100%;
}

/* GitHub specific styles */
.github-icon:hover {
  background: linear-gradient(135deg, rgba(36, 41, 46, 0.9), rgba(36, 41, 46, 0.7));
}

/* LinkedIn specific styles */
.linkedin-icon:hover {
  background: linear-gradient(135deg, rgba(0, 119, 181, 0.9), rgba(0, 119, 181, 0.7));
}

/* Responsive adjustments */
@media (max-width: 768px) {
  /* Grid layout adjustments */
  .grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }

  /* Container adjustments */
  .col-span-1 {
    padding: 1rem !important;
  }

  /* Typography adjustments */
  .lg\:text-8xl {
    font-size: 3rem !important;
    line-height: 1.1 !important;
  }

  .lg\:text-2xl {
    font-size: 1.25rem !important;
  }

  /* Creative left section mobile adjustments */
  .creative-left-section {
    padding: 1.5rem !important;
    min-height: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  /* Floating elements mobile adjustments */
  .floating-orb {
    display: none !important;
  }

  .floating-line {
    display: none !important;
  }

  /* Experience section mobile adjustments */
  .experience-section {
    gap: 1rem !important;
  }

  .section-header {
    gap: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .section-title {
    font-size: 0.875rem !important;
  }

  /* Stats grid mobile adjustments */
  .stats-grid {
    grid-template-columns: 1fr !important;
    gap: 0.75rem !important;
  }

  .stat-card {
    padding: 0.875rem !important;
    gap: 0.625rem !important;
  }

  .stat-icon {
    width: 2rem !important;
    height: 2rem !important;
  }

  .stat-icon .icon {
    width: 1rem !important;
    height: 1rem !important;
  }

  .stat-number {
    font-size: 1rem !important;
  }

  .stat-label {
    font-size: 0.625rem !important;
  }

  .creative-badge-content {
    padding: 0.75rem 0.875rem !important;
    gap: 0.75rem !important;
    width: 100% !important;
    justify-content: flex-start !important;
  }

  .creative-tech-icon {
    width: 2rem !important;
    height: 2rem !important;
    font-size: 0.875rem !important;
    flex-shrink: 0 !important;
  }

  .creative-tech-name {
    font-size: 0.875rem !important;
    font-weight: 500 !important;
  }

  /* Social buttons mobile adjustments */
  .social-buttons-container {
    flex-direction: column !important;
    gap: 1rem !important;
    margin-top: 1.5rem !important;
    align-items: center !important;
  }

  .cv-button-wrapper {
    width: 100% !important;
    max-width: 280px !important;
  }

  .cv-button {
    padding: 0.875rem 1.5rem !important;
    font-size: 0.875rem !important;
  }

  .button-text {
    font-size: 0.75rem !important;
  }

  .button-icon {
    width: 1rem !important;
    height: 1rem !important;
  }

  /* Social icons mobile adjustments */
  .social-icons-container {
    gap: 1.5rem !important;
    justify-content: center !important;
  }

  .social-icon {
    width: 3.5rem !important;
    height: 3.5rem !important;
  }

  .icon {
    width: 1.5rem !important;
    height: 1.5rem !important;
  }

  /* Image mobile adjustments */
  .relative.w-56.h-56.sm\:w-80.sm\:h-80.lg\:w-96.lg\:h-96 {
    width: 200px !important;
    height: 200px !important;
  }

  /* Typing animation mobile adjustments */
  .typing {
    font-size: 1rem !important;
  }

  /* Spacing adjustments */
  .space-y-3 > * + * {
    margin-top: 0.375rem !important;
  }

  .space-y-4 > * + * {
    margin-top: 0.5rem !important;
  }

  .mb-6 {
    margin-bottom: 1rem !important;
  }

  .mb-8 {
    margin-bottom: 1.5rem !important;
  }

  .mt-8 {
    margin-top: 1.5rem !important;
  }

  .mt-12 {
    margin-top: 2rem !important;
  }
}

/* Extra small mobile adjustments */
@media (max-width: 480px) {
  .lg\:text-8xl {
    font-size: 2.5rem !important;
  }

  .creative-left-section {
    padding: 1rem !important;
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  .creative-tech-grid {
    gap: 0.5rem !important;
  }

  .creative-badge-content {
    padding: 0.5rem 0.75rem !important;
  }

  .social-buttons-container {
    gap: 1rem !important;
  }

  .cv-button {
    padding: 0.75rem 1.25rem !important;
  }

  .social-icon {
    width: 3rem !important;
    height: 3rem !important;
  }

  .icon {
    width: 1.25rem !important;
    height: 1.25rem !important;
  }
}
</style>
