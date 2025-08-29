<template>
  <div class="w-full h-full min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary to-black">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div class="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl animate-pulse delay-500" />
    </div>

    <!-- Grid Layout -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 text-white h-screen lg:min-h-screen pt-16 lg:pt-0">
      <!-- Left Column - Content (Full width on mobile) -->
      <div class="col-span-1 lg:col-span-1 flex items-center lg:justify-center justify-start w-full p-6 sm:p-6 lg:p-12">
        <div class="left-section-background">
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

          <!-- Tech Stats Section -->
          <div
            class="tech-stats-section mt-8 lg:mt-12"
          >
            <!-- Tech Header -->
            <div class="tech-header">
              <span class="tech-label">Experience Overview</span>
              <div class="animated-line"></div>
              <div
                class="tech-count"
              >3</div>
            </div>

            <!-- Tech Grid -->
            <div class="tech-grid">
              <div class="tech-badge" style="--delay: 0ms">
                <div class="tech-badge-content">
                  <span class="tech-icon">4+</span>
                  <span class="tech-name">Years Exp</span>
                </div>
                <div class="tech-badge-glow"></div>
              </div>
              <div class="tech-badge" style="--delay: 120ms">
                <div class="tech-badge-content">
                  <span class="tech-icon">6+</span>
                  <span class="tech-name">Projects</span>
                </div>
                <div class="tech-badge-glow"></div>
              </div>
              <div class="tech-badge" style="--delay: 240ms">
                <div class="tech-badge-content">
                  <span class="tech-icon">5+</span>
                  <span class="tech-name">Skills</span>
                </div>
                <div class="tech-badge-glow"></div>
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

          <!-- Social Buttons Section -->
          <div class="social-buttons-container">
            <!-- Download CV Button -->
            <div class="cv-button-wrapper">
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
              </NuxtLink>
            </div>

            <!-- Social Icons -->
            <div class="social-icons-container">
              <div class="social-icon-wrapper">
                <NuxtLink
                  to="https://github.com/sandipGit2023"
                  target="_blank"
                  class="social-icon github-icon"
                >
                  <Icon name="prime:github" class="icon" />
                  <div class="icon-glow"></div>
                  <div class="icon-ripple"></div>
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

/* Tech Stats Section */
.tech-stats-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Tech Header */
.tech-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  position: relative;
}

.tech-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

/* Animated Line */
.animated-line {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff99, transparent);
  transition: width 0.6s ease;
  z-index: 1;
}

/* Left Section Background */
.left-section-background {
  position: relative;
  padding: 2rem;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.05), rgba(0, 255, 153, 0.02));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 153, 0.1);
  transition: all 0.4s ease;
}

/* Left section hover effect */
.left-section-background:hover {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.1), rgba(0, 255, 153, 0.05));
  border-color: rgba(0, 255, 153, 0.2);
  box-shadow: 0 20px 40px rgba(0, 255, 153, 0.1);
}

.left-section-background:hover .animated-line {
  width: 80%;
}

.left-section-background:hover .tech-label {
  color: #00ff99;
}

.tech-count {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.2), rgba(0, 255, 153, 0.1));
  color: #00ff99;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(0, 255, 153, 0.3);
  transition: all 0.3s ease;
}

.tech-count:hover {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.3), rgba(0, 255, 153, 0.2));
  border-color: rgba(0, 255, 153, 0.5);
}

/* Tech Grid */
.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Tech Badge */
.tech-badge {
  position: relative;
  animation: slideInFromBottom 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  animation-delay: var(--delay);
}

@keyframes slideInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  50% {
    opacity: 0.7;
    transform: translateY(-5px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.tech-badge-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-badge:hover .tech-badge-content {
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.15), rgba(0, 255, 153, 0.08));
  border-color: rgba(0, 255, 153, 0.4);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 255, 153, 0.2);
}

.tech-badge-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 255, 153, 0.1), transparent);
  border-radius: 0.5rem;
  opacity: 0;
  filter: blur(12px);
  transition: all 0.3s ease;
}

.tech-badge:hover .tech-badge-glow {
  opacity: 1;
  filter: blur(16px);
}

/* Tech Icon */
.tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.2), rgba(0, 255, 153, 0.1));
  color: #00ff99;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.tech-badge:hover .tech-icon {
  background: linear-gradient(135deg, #00ff99, rgba(0, 255, 153, 0.8));
  color: #000;
  transform: scale(1.1);
}

/* Tech Name */
.tech-name {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-badge:hover .tech-name {
  color: #00ff99;
  font-weight: 600;
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
  background: linear-gradient(135deg, rgba(0, 255, 153, 0.2), rgba(0, 255, 153, 0.1));
  border-color: #00ff99;
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 255, 153, 0.3);
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

  /* Mobile adjustments for social buttons */
  .social-buttons-container {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .cv-button {
    padding: 0.875rem 1.5rem;
  }

  .social-icon {
    width: 3rem;
    height: 3rem;
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  /* Mobile adjustments for left section */
  .left-section-background {
    padding: 1.5rem;
  }
}
</style>
