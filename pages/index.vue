<template>
  <div class="w-full h-full min-h-screen inset-0 grid grid-cols-1 md:grid-cols-2 text-white">
    <div class="font-bold text-left flex items-center md:justify-center justify-start w-full p-6">
      <div>
        <h2 class="md:text-2xl text-md uppercase hidden md:block">
          <span class="block w-[150px] min-h-[1.5em] relative">
            <span class="typing top-0 left-0 absolute">{{ currentText }}</span>
            <span class="invisible">software developer</span>
          </span>
        </h2>
        <h1 class="md:text-7xl text-4xl capitalize my-[20px]">
          Hello, I'm
        </h1>
        <h1 class="md:text-7xl text-4xl capitalize text-accent">
          Sandip
        </h1>
        <h2 class="md:text-2xl text-md uppercase block md:hidden mt-5">
          <span class="block w-[150px] min-h-[1.5em] relative">
            <span class="typing top-0 left-0 absolute">{{ currentText }}</span>
            <span class="invisible">software developer</span>
          </span>
        </h2>

        <div class="flex items-center justify-start gap-4 md:mt-40 mt-10">
          <NuxtLink
            href="/cv/Sandip_Ghodasara_Int_new.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Sandip_Ghodasara_CV.pdf"
            class="group border-2 rounded-full py-2 px-4 h-12 flex items-center justify-center gap-2 uppercase hover:border-accent-hover hover:bg-accent-hover transition-all duration-500 cursor-pointer"
          >
            <span class="group-hover:text-black">Download CV</span>
            <Icon name="prime:download" class="w-5 h-5 group-hover:bg-black" />
          </NuxtLink>

          <div class="mx-4 w-[20px] h-[1px] bg-white hidden md:block" />

          <NuxtLink
            to="https://github.com/sandipGit2023"
            target="_blank"
            class="group border-2 rounded-full w-12 h-12 flex items-center justify-center hover:border-accent-hover hover:bg-accent-hover transition-all duration-500 cursor-pointer"
          >
            <Icon name="prime:github" class="w-9 h-9 bg-white group-hover:bg-black transition-all duration-500" />
          </NuxtLink>
          <NuxtLink
            to="https://linkedin.com/in/ghodasara-sandip"
            target="_blank"
            class="group border-2 rounded-full w-12 h-12 flex items-center justify-center hover:border-accent-hover hover:bg-accent-hover transition-all duration-500 cursor-pointer"
          >
            <Icon
              name="basil:linkedin-solid"
              class="w-6 h-6 bg-white group-hover:bg-black transition-all duration-500"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="absolute left-235 bottom-0 top-1/2 -translate-y-1/2 w-[2px] h-[700px] bg-white hidden md:block" />

    <div class="flex flex-col items-center md:justify-center w-full p-6">
      <div class="mb-20 relative hidden md:block">
        <div class="animated-ring" />
        <img src="@/assets/images/sandip_img.png" alt="sandip" class="w-[350px] relative z-10 rounded-full">
      </div>

      <div class="md:px-20 w-full">
        <PortfolioStatistics />
      </div>
    </div>
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

/* Glowing, rotating animated ring */
.animated-ring {
  position: absolute;
  width: 350px;
  height: 360px;
  border-radius: 50%;
  border: 4px solid transparent;
  box-shadow: 0 0 20px #00ff99, 0 0 30px #00ff99;
  animation: spin 10s linear infinite, pulse 2s ease-in-out infinite alternate;
  z-index: 1;
}

/* Smooth rotation animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Pulse glow effect */
@keyframes pulse {
  0% {
    box-shadow: 0 0 10px #00ff99, 0 0 20px #00ff99;
  }
  100% {
    box-shadow: 0 0 30px #00ff99, 0 0 60px #00ff99;
  }
}
</style>
