<template>
  <div class="w-full h-full min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary to-black">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div class="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl animate-pulse delay-500" />
    </div>

    <!-- Grid Layout -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 text-white min-h-screen">
      <!-- Left Column - Project Info -->
      <div class="flex items-center lg:justify-center justify-start w-full p-6 sm:p-6 lg:p-12">
        <div class="lg:min-w-[400px] min-w-[250px] max-w-full animate-fade-in">
          <ProjectCard :project="projects[currentProject]" />
        </div>
      </div>

      <!-- Right Column - Project Details -->
      <div class="flex items-center justify-center w-full p-4 sm:p-6 lg:p-12">
        <div class="w-full max-w-4xl animate-scale-in">
          <ProjectDetailsCard :project="currentProjectDetail" />
        </div>
      </div>
    </div>

    <!-- Navigation Button - Bottom Left -->
    <div class="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20">
      <button
        class="group relative overflow-hidden border-2 border-white text-white font-bold w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full hover:bg-accent-hover hover:border-accent hover:text-black transition-all duration-500 cursor-pointer hover:shadow-glow"
        aria-label="Next project"
        @click="nextProject"
      >
        <IconsRightArrow class="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-all duration-300" />
      </button>
    </div>

    <!-- Project Counter -->
    <div class="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-white/60 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20 animate-fade-in">
      {{ currentProject + 1 }} / {{ projects.length }}
    </div>

    <!-- Scroll Up Indicator (Desktop Only) -->
    <div
      v-if="!isMobile"
      ref="scrollUpIndicator"
      class="fixed top-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0 transition-all duration-500 ease-out"
      :class="{ 'opacity-100': showScrollUpIndicator }"
    >
      <div class="flex flex-col items-center group cursor-pointer" @click="navigateToDirection('up')">
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
            <div class="w-4 h-4 border-r-2 border-b-2 border-accent transform -rotate-135 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Down Indicator (Desktop Only) -->
    <div
      v-if="!isMobile"
      ref="scrollDownIndicator"
      class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0 transition-all duration-500 ease-out"
      :class="{ 'opacity-100': showScrollDownIndicator }"
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
            <div class="w-4 h-4 border-r-2 border-b-2 border-accent transform rotate-45 animate-bounce"></div>
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
const projects = ref([
  { num: '01', name: 'Trady', description: 'Empowering service professionals with instant website creation, online booking, payments, and streamlined job management.', stock: ['Laravel', 'Next', 'Node', 'MySQL'] },
  { num: '02', name: 'Jib', description: 'AI-powered Superapp enabling no-code SaaS creation through natural language, automating content, payments, and workflow integrations.', stock: ['Laravel', 'Nuxt', 'MySQL'] },
  { num: '03', name: 'AEIS', description: 'Revolutionizing document management for critical infrastructure projects with microservices architecture, real-time collaboration, and secure data handling.', stock: ['Laravel', 'React', 'Postgres'] },
  { num: '04', name: 'Eatcard', description: 'A complete hospitality platform integrating POS, takeaway, kiosks, reservations, and delivery with real-time updates and automation.', stock: ['Laravel', 'Vue', 'MySQL'] },
  { num: '05', name: '10/1', description: 'A comprehensive horse betting platform offering live odds, race tracking, betting analytics, and user-friendly interfaces for web and mobile.', stock: ['Laravel', 'Vue', 'Node', 'Flutter'] },
])

const projectDetailDescription = ref([
  {
    name: 'Trady',
    title: 'Empowering Service Professionals with Trady',
    description: [
      'Trady enables home service businesses to launch websites, manage bookings, and process payments — all within minutes.',
      'Built-in analytics help businesses track performance, optimize services, and drive growth with actionable insights.',
      'Seamless integrations with payments, calendars, and marketing tools improve efficiency for both service providers and customers.',
      'By automating operations and simplifying management, Trady keeps small businesses agile and customer-focused.',
      'Trusted by countless local businesses, Trady fuels growth with a professional online presence and operational ease.',
    ],
    year: '2021-2023',
  },
  {
    name: 'Jib',
    title: 'Revolutionizing SaaS Creation with Jib',
    description: [
      'Jib redefines app creation — users describe their needs, and Jib builds custom SaaS solutions instantly.',
      'Integrated AI generates content, designs interfaces, and connects APIs, making development accessible to non-technical users.',
      'From e-commerce to fitness trackers, Jib empowers entrepreneurs to bring ideas to life without coding expertise.',
      'Jib\'s advanced workflow automation and real-time integrations create scalable, production-ready apps in minutes.',
      'With continuous AI advancements, Jib stays future-proof, ensuring businesses remain competitive and adaptable.',
    ],
    year: '2022-2024',
  },
  {
    name: 'AEIS',
    title: 'Streamlining Infrastructure Projects with AEIS',
    description: [
      'AEIS delivers a microservices-driven Document Management System for inspection, engineering, and compliance workflows.',
      'It ensures real-time data accessibility, reducing rework while improving collaboration across distributed project teams.',
      'Robust access controls, version management, and secure APIs ensure data integrity for critical infrastructure projects.',
      'With automation, AEIS accelerates documentation, speeds approvals, and enhances operational efficiency industry-wide.',
      'Empowering engineering teams to meet deadlines faster, AEIS drives precision, compliance, and seamless data handling.',
    ],
    year: '2020-2022',
  },
  {
    name: 'Eatcard',
    title: 'Revolutionizing Restaurant Operations with Eatcard',
    description: [
      'Eatcard integrates POS, mobile dine-in, kiosks, and delivery into a seamless, all-in-one restaurant management system.',
      'It empowers restaurants to enhance customer experiences, optimize workflows, and boost revenue with real-time insights.',
      'With self-service kiosks and mobile ordering, Eatcard reduces wait times, improving service speed and satisfaction.',
      'Comprehensive admin control, reporting, and third-party integrations make Eatcard a one-stop operational powerhouse.',
      'Eatcard\'s AI-enhanced recommendations personalize the dining experience, increasing loyalty and customer satisfaction.',
    ],
    year: '2023-2025',
  },
  {
    name: '10/1',
    title: 'Ultimate Horse Betting Platform',
    description: [
      'HorseBet delivers a dynamic, all-in-one betting experience with live race tracking, real-time odds, and secure transactions.',
      'Powered by Vue 3 and Flutter, it ensures a responsive, engaging UI across web and mobile apps.',
      'Advanced analytics and insights help users make informed bets, boosting their chances of success.',
      'Real-time notifications keep bettors updated on race statuses, odds changes, and win results.',
      'Designed for both casual bettors and dedicated enthusiasts, HorseBet combines performance, simplicity, and excitement into one powerful platform.',
    ],
    year: '2024-2025',
  },
])

const currentProject = ref(0)

const currentProjectDetail = computed(() => {
  const current = projects.value[currentProject.value].name
  return projectDetailDescription.value.find(p => p.name === current)
})

const nextProject = () => {
  currentProject.value = (currentProject.value + 1) % projects.value.length
}

// Use scroll navigation composable
const { handleScrollNavigation, navigateToDirection } = useScrollNavigation()

// Scroll indicators
const scrollUpIndicator = ref(null)
const scrollDownIndicator = ref(null)
const showScrollUpIndicator = ref(false)
const showScrollDownIndicator = ref(false)
const isMobile = ref(false)

// Check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768 || 'ontouchstart' in window
}

// Handle cursor movement (desktop only)
const handleMouseMove = (event) => {
  if (isMobile.value) return

  // Show scroll indicators when cursor is at top or bottom of page
  const windowHeight = window.innerHeight
  const mouseY = event.clientY

  if (mouseY < 100) {
    showScrollUpIndicator.value = true
  } else {
    showScrollUpIndicator.value = false
  }

  if (mouseY > windowHeight - 100) {
    showScrollDownIndicator.value = true
  } else {
    showScrollDownIndicator.value = false
  }
}

onMounted(() => {
  // Check if mobile
  checkMobile()

  // Only setup scroll navigation for desktop
  if (!isMobile.value) {
    const { setupListeners: setupDownListeners, cleanupListeners: cleanupDownListeners } = handleScrollNavigation({
      direction: 'down',
      threshold: 100,
      delay: 500
    })

    const { setupListeners: setupUpListeners, cleanupListeners: cleanupUpListeners } = handleScrollNavigation({
      direction: 'up',
      threshold: 50,
      delay: 500
    })

    setupDownListeners()
    setupUpListeners()

    // Setup mouse move listener for desktop only
    document.addEventListener('mousemove', handleMouseMove)

    // Store cleanup function for unmount
    onUnmounted(() => {
      cleanupDownListeners()
      cleanupUpListeners()
      document.removeEventListener('mousemove', handleMouseMove)
    })
  }
})
</script>

<style scoped>
/* Custom animations */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
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

.delay-500 {
  animation-delay: 500ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style>
