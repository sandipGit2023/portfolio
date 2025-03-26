<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="item in experience"
      :key="item.title"
      class="p-4 bg-[#232329] shadow-md rounded-xl flex flex-col justify-between hover:shadow-lg transition group"
    >
      <h2 class="text-accent text-lg font-semibold">
        {{ item.year }}
      </h2>
      <h3 class="text-white md:text-xl text-lg font-bold mt-2">
        {{ item.title }}
      </h3>
      <p class="text-gray-400 text-sm mt-1">
        <span class="text-accent">•</span> {{ item.institute }}
      </p>
    </div>
  </div>
</template>

<script setup>
const experience = ref([
  { year: '2024 - Present', title: 'Senior Software Engineer', institute: 'Intelivita Private Limited' },
  { year: '2022 - 2024', title: 'Senior Software Engineer', institute: 'Bytes Technolab Private Limited' },
  { year: '2021 - 2022', title: 'Junior Web Developer', institute: 'Weboccult Technologies Pvt. Ltd.' },
  { year: '2015 - 2018', title: 'Bachelor of Engineering', institute: 'Parul Institute of Engineering and Technology' },
  { year: '2012 - 2015', title: 'Diploma in Engineering', institute: 'Sanjaybhai Rajguru College of Engineering' },
])
</script>

  <style scoped>
  .group:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
  </style>
