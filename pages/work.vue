<template>
  <div class="w-full h-full min-h-screen grid grid-cols-1 md:grid-cols-2 text-white">
    <div class="font-bold text-left flex items-center justify-center w-full p-6">
      <div class="md:min-w-[400px] min-w-[250px] max-w-full">
        <ProjectCard :project="projects[currentProject]" />
      </div>
    </div>

    <div class="hidden md:block absolute left-235 top-[115px] h-[250px] w-[2px] bg-white" />
    <div class="absolute md:left-228 md:top-88 right-5 top-5 items-center justify-start gap-4 md:mt-20">
      <button
        class="group border-2 rounded-full py-2 px-4 h-15 flex items-center justify-center gap-2 capitalize hover:border-accent-hover hover:bg-accent-hover transition-all duration-500 cursor-pointer"
        @click="nextProject"
      >
        <IconsRightArrow class="group-hover:text-black" />
      </button>
    </div>
    <div class="hidden md:block absolute left-235 bottom-[115px] w-[2px] h-[250px] bg-white" />

    <div class="flex items-center justify-center w-full p-6">
      <ProjectDetailsCard :project="currentProjectDetail" />
    </div>
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
      'Jib’s advanced workflow automation and real-time integrations create scalable, production-ready apps in minutes.',
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
      'Eatcard’s AI-enhanced recommendations personalize the dining experience, increasing loyalty and customer satisfaction.',
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
</script>

<style scoped>
.typing {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #fff;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
