<template>
  <div class="w-full h-full min-h-screen inset-0 grid grid-cols-1 md:grid-cols-2 text-white">
    <div class="font-bold text-left flex items-center justify-center w-full p-6">
      <div>
        <h1 class="md:text-7xl text-4xl capitalize my-[20px]">
          contact
        </h1>
        <h2 class="md:text-2xl text-md capitalize">
          <span class="block w-[150px] min-h-[1.5em] relative">
            <span class="typing top-0 left-0 absolute text-accent">{{ currentText }}</span>
            <span class="invisible">software developer</span>
          </span>
        </h2>
        <h1 class="text-white/60 max-w-[500px] py-4">
          Have a project or idea in mind? Let’s team up to create intuitive, high-performance solutions that drive results.
        </h1>
      </div>
    </div>
    <div class="absolute left-235 bottom-0 top-1/2 -translate-y-1/2 w-[2px] h-[700px] bg-white hidden md:block" />

    <div class="flex md:items-center md:justify-center md:w-full md:p-20 p-6">
      <div class="max-w-2xl">
        <div class="flex md:flex-row flex-col items-left gap-4">
          <div class="text-green-400">
            <IconsPhone />
          </div>
          <div>
            <p class="text-gray-400 text-sm">
              Phone
            </p>
            <p class="font-medium">
              (+91) 917 342 0297
            </p>
          </div>
        </div>
        <div class="flex md:flex-row flex-col items-left gap-4 my-10">
          <div class="text-green-400">
            <IconsEmail />
          </div>
          <div>
            <p class="text-gray-400 text-sm">
              Email
            </p>
            <p class="font-medium">
              ghodasarasandip011@gmail.com
            </p>
          </div>
        </div>
        <div class="flex md:flex-row flex-col items-left gap-4">
          <div class="text-green-400">
            <IconsLocation />
          </div>
          <div>
            <p class="text-gray-400 text-sm">
              Address
            </p>
            <p class="font-medium">
              Gota, Ahmedabad, Gujarat
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const phrases = ['let\'s work together']
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
.typing {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid #fff;
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
</style>
