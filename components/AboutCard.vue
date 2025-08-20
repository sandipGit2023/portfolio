<template>
  <div class="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:bg-white/15 hover:border-accent/30 hover:shadow-glow transition-all duration-500 transform hover:scale-105">
    <div class="flex flex-col items-center text-center space-y-8">
      <div class="relative">
        <img
          src="https://avatars.githubusercontent.com/u/136835202?v=4"
          alt="Sandip Ghodasara"
          class="w-32 h-32 rounded-full border-4 border-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        >
        <div class="absolute inset-0 rounded-full border-4 border-accent/30 animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
        <div class="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-bounce"></div>
        <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-accent/60 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div class="space-y-3">
        <h2 class="text-white text-3xl lg:text-4xl font-black group-hover:text-accent transition-colors duration-300">
          Sandip Ghodasara
        </h2>
        <p class="text-accent text-xl font-bold group-hover:scale-110 transition-transform duration-300">
          Software Engineer
        </p>
      </div>

      <ul class="text-white/80 space-y-6 text-lg leading-relaxed max-w-2xl">
        <li class="flex items-start gap-4 group/item">
          <span class="text-accent text-2xl mt-1 group-hover/item:scale-110 transition-transform duration-300">🚀</span>
          <span class="group-hover/item:text-white transition-colors duration-300">Building robust APIs and scalable web apps with Laravel, Node.js, and Vue.</span>
        </li>
        <li class="flex items-start gap-4 group/item">
          <span class="text-accent text-2xl mt-1 group-hover/item:scale-110 transition-transform duration-300">🛠️</span>
          <span class="group-hover/item:text-white transition-colors duration-300">Expert in crafting dynamic admin panels and CMS with clean UI.</span>
        </li>
        <li class="flex items-start gap-4 group/item">
          <span class="text-accent text-2xl mt-1 group-hover/item:scale-110 transition-transform duration-300">🌟</span>
          <span class="group-hover/item:text-white transition-colors duration-300">Passionate about creating high-performance, maintainable codebases.</span>
        </li>
        <li class="flex items-start gap-4 group/item">
          <span class="text-accent text-2xl mt-1 group-hover/item:scale-110 transition-transform duration-300">✨</span>
          <span class="group-hover/item:text-white transition-colors duration-300">Driving projects from concept to deployment with precision and innovation.</span>
        </li>
      </ul>
    </div>

    <!-- Animated background elements -->
    <div class="absolute top-6 right-6 w-3 h-3 bg-accent/40 rounded-full animate-ping"></div>
    <div class="absolute bottom-6 left-6 w-2 h-2 bg-accent/60 rounded-full animate-ping delay-1000"></div>

    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
</template>

<script setup></script>
