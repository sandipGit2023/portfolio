<template>
  <div class="space-y-3 lg:space-y-4">
    <div
      v-for="item in experience"
      :key="item.title"
      class="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 lg:p-4 hover:bg-accent/10 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105"
    >
      <div class="flex items-start gap-3">
        <!-- Timeline dot -->
        <div class="relative mt-1">
          <div class="w-3 h-3 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300" />
          <div class="absolute inset-0 bg-accent/30 rounded-full animate-ping" />
        </div>

        <!-- Content -->
        <div class="flex-1 space-y-2">
          <div class="flex items-center justify-between">
            <h2 class="text-accent text-xs lg:text-sm font-bold group-hover:text-white transition-colors duration-300">
              {{ item.year }}
            </h2>
            <div class="text-xs font-medium text-white/60 bg-white/10 px-2 py-1 rounded-full">
              {{ getExperienceType(item.title) }}
            </div>
          </div>

          <h3 class="text-white text-base lg:text-lg font-black leading-tight group-hover:text-accent transition-colors duration-300">
            {{ item.title }}
          </h3>

          <p class="text-white/70 text-xs lg:text-sm group-hover:text-white transition-colors duration-300">
            {{ item.institute }}
          </p>
        </div>
      </div>

      <!-- Hover line effect -->
      <div class="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
    </div>
  </div>
</template>

<script setup>
const experience = ref([
  { year: '2024 - 2024', title: 'Senior Software Engineer', institute: 'Intelivita Private Limited' },
  { year: '2022 - 2024', title: 'Senior Software Engineer', institute: 'Bytes Technolab Private Limited' },
  { year: '2021 - 2022', title: 'Junior Web Developer', institute: 'Weboccult Technologies Pvt. Ltd.' },
])

const getExperienceType = (title) => {
  if (title.includes('Senior')) return 'SENIOR'
  if (title.includes('Junior')) return 'JUNIOR'
  if (title.includes('Bachelor')) return 'EDUCATION'
  if (title.includes('Diploma')) return 'EDUCATION'
  return 'EXPERIENCE'
}
</script>

<style scoped>
.group:hover {
  transform: translateY(-2px) scale(1.02);
  transition: transform 0.5s ease;
}
</style>
