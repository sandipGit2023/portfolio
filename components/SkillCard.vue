<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
    <div
      v-for="item in skills"
      :key="item.lable"
      class="p-4 bg-[#232329] shadow-md rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition group h-[150px] cursor-pointer"
    >
      <Icon :name="item.icon" class="text-6xl group-hover:bg-[#00e187] transition-all duration-300" />
      <p class="mt-2 font-semibold text-gray-200 capitalize group-hover:text-[#00e187]">
        {{ item.lable }}
      </p>
    </div>
  </div>
</template>

<script setup>
const skills = ref([
  { lable: 'laravel', icon: 'mdi:laravel' },
  { lable: 'node', icon: 'fa6-brands:node' },
  { lable: 'tailwindcss', icon: 'lineicons:tailwindcss' },
  { lable: 'nuxt', icon: 'lineicons:nuxt' },
  { lable: 'vue', icon: 'carbon:logo-vue' },
  { lable: 'react', icon: 'cib:react' },
])
</script>
