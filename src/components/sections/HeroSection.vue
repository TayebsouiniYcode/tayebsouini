<template>
  <section id="home" class="min-h-screen flex items-center relative overflow-hidden">
    <div class="absolute inset-0 grid-bg"></div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <div class="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-16">

        <!-- Text -->
        <div class="flex-1" v-reveal>
          <div class="available-badge mb-6 w-fit">
            <span class="available-dot"></span>
            Disponible pour missions freelance
          </div>

          <p class="text-primary font-mono text-sm mb-3 tracking-wide">Bonjour, je suis</p>
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white mb-4">
            Tayeb<br /><span class="gradient-text">Souini</span>
          </h1>

          <div class="flex items-center gap-3 text-xl md:text-2xl font-semibold text-slate-300 mb-6 h-9">
            <span>Développeur</span>
            <span class="text-primary font-bold">{{ typedText }}</span>
            <span class="cursor-blink"></span>
          </div>

          <p class="text-slate-400 max-w-xl text-lg leading-relaxed mb-10">
            Développeur Web Full Stack spécialisé en
            <span class="text-white font-medium">Laravel & Vue.js</span>
            avec 3 ans d'expérience. Je conçois des applications web modernes,
            robustes et performantes — de l'API au frontend.
          </p>

          <div class="flex gap-4 flex-wrap mb-10">
            <RouterLink to="/projects" class="btn-primary">
              Voir mes projets <ArrowRightIcon />
            </RouterLink>
            <a href="#contact" class="btn-outline">Me contacter</a>
            <a :href="personal.cv" target="_blank" class="btn-ghost">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              Télécharger CV
            </a>
          </div>

          <div class="flex items-center gap-5">
            <a v-if="personal.github"   :href="personal.github"   target="_blank" rel="noopener" class="social-icon" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a v-if="personal.linkedin" :href="personal.linkedin" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a v-if="personal.email"    :href="`mailto:${personal.email}`" class="social-icon" aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>

        <!-- Avatar -->
        <div class="flex-shrink-0 animate-float" v-reveal="200">
          <div class="relative">
            <div class="absolute -inset-4 rounded-full bg-gradient-to-br from-primary to-secondary opacity-15 blur-2xl"></div>
            <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/25 bg-surface overflow-hidden flex items-center justify-center glow">
              <img v-if="personal.photo" :src="personal.photo" alt="Tayeb Souini" class="w-full h-full object-cover" />
              <span v-else class="text-7xl font-black gradient-text">TS</span>
            </div>
            <div class="absolute -top-4 -right-4 bg-surface border border-slate-700 rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-xl">
              Laravel <span class="text-primary">✦</span> Vue.js
            </div>
            <div class="absolute -bottom-4 -left-4 bg-surface border border-slate-700 rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-xl">
              3 ans d'exp. 🚀
            </div>
          </div>
        </div>

      </div>

      <!-- Stats row -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4" v-reveal="300">
        <div v-for="stat in about.stats" :key="stat.label" class="stat-card">
          <div class="text-3xl font-extrabold gradient-text">{{ stat.number }}</div>
          <div class="text-slate-400 text-sm mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <a
      href="#about"
      aria-label="Défiler vers À propos"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-primary transition-colors animate-bounce"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </a>
  </section>
</template>

<script setup>
import { personal, about } from '@/data/index.js'
import { useTyping }       from '@/composables/useTyping.js'
import ArrowRightIcon      from '@/components/icons/ArrowRightIcon.vue'
import GithubIcon          from '@/components/icons/GithubIcon.vue'
import LinkedinIcon        from '@/components/icons/LinkedinIcon.vue'
import EmailIcon           from '@/components/icons/EmailIcon.vue'

const { text: typedText } = useTyping(personal.title)
</script>
