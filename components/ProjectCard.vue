<template>
  <div class="group">
    <div class="mb-6 lg:mb-8">
      <div class="relative">
        <div class="lg:text-9xl text-6xl sm:text-7xl leading-none font-black text-transparent text-outline-style group-hover:scale-110 transition-transform duration-500">
          {{ project.num }}
        </div>
        <div class="absolute inset-0 lg:text-9xl text-6xl sm:text-7xl leading-none font-black text-accent/20 group-hover:scale-110 transition-transform duration-500 delay-100">
          {{ project.num }}
        </div>
      </div>

      <h2 class="lg:text-[48px] text-3xl sm:text-4xl font-black leading-tight group-hover:text-accent transition-all duration-500 capitalize text-white mt-6 lg:mt-8">
        project <span class="text-accent group-hover:scale-110 transition-transform duration-300 inline-block">{{ project.name }}</span>
      </h2>

      <p class="text-white/80 max-w-[300px] lg:max-w-[500px] py-4 text-sm lg:text-lg leading-relaxed group-hover:text-white transition-colors duration-300 mt-6 lg:mt-8">
        {{ project.description }}
      </p>

      <!-- Compact Tech Stack Section -->
      <div class="tech-stack-compact mt-6 lg:mt-8">
        <!-- Compact Header -->
        <div class="tech-header-compact">
          <span class="tech-label">Tech Stack</span>
          <div class="tech-count">{{ project.stock.length }}</div>
        </div>

        <!-- Compact Tech Grid -->
        <div class="tech-grid-compact">
          <div
            v-for="(tech, index) in project.stock"
            :key="index"
            class="tech-badge-compact"
            :style="{ '--delay': `${index * 80}ms` }"
          >
            <div class="tech-badge-content">
              <span class="tech-icon-compact">{{ tech.charAt(0) }}</span>
              <span class="tech-name-compact">{{ tech }}</span>
            </div>
            <div class="tech-badge-glow" />
          </div>
        </div>
      </div>

      <div class="w-full h-[2px] bg-gradient-to-r from-accent via-accent-dark to-transparent group-hover:scale-x-110 transition-transform duration-500 origin-left mt-6 lg:mt-8" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.text-outline-style {
  color: transparent;
  -webkit-text-stroke: 2px #fff;
  text-stroke: 2px #fff;
}

.delay-100 {
  animation-delay: 100ms;
}

/* Compact Tech Stack Container */
.tech-stack-compact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Compact Header */
.tech-header-compact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
}

.tech-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.group:hover .tech-label {
  color: #ffc107;
}

.tech-count {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.1));
  color: #ffc107;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 193, 7, 0.3);
  transition: all 0.3s ease;
}

.group:hover .tech-count {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.3), rgba(255, 193, 7, 0.2));
  border-color: rgba(255, 193, 7, 0.5);
}

/* Compact Tech Grid */
.tech-grid-compact {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Compact Tech Badge */
.tech-badge-compact {
  position: relative;
  animation: fadeInScale 0.5s ease-out forwards;
  opacity: 0;
  transform: scale(0.8);
  animation-delay: var(--delay);
}

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
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

.tech-badge-compact:hover .tech-badge-content {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.15), rgba(255, 193, 7, 0.08));
  border-color: rgba(255, 193, 7, 0.4);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.2);
}

.tech-badge-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255, 193, 7, 0.1), transparent);
  border-radius: 0.5rem;
  opacity: 0;
  filter: blur(12px);
  transition: all 0.3s ease;
}

.tech-badge-compact:hover .tech-badge-glow {
  opacity: 1;
  filter: blur(16px);
}

/* Tech Icon */
.tech-icon-compact {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.1));
  color: #ffc107;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.tech-badge-compact:hover .tech-icon-compact {
  background: linear-gradient(135deg, #ffc107, rgba(255, 193, 7, 0.8));
  color: #000;
  transform: scale(1.1);
}

/* Tech Name */
.tech-name-compact {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-badge-compact:hover .tech-name-compact {
  color: #ffc107;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .tech-grid-compact {
    gap: 0.375rem;
  }

  .tech-badge-content {
    padding: 0.375rem 0.625rem;
  }

  .tech-icon-compact {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.625rem;
  }

  .tech-name-compact {
    font-size: 0.75rem;
  }
}
</style>
