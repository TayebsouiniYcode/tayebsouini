<template>
  <section id="services" class="py-28 bg-surface/30 relative">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-14" v-reveal>
        <h2 class="section-title mx-auto">Services Freelance</h2>
        <p class="text-slate-400 mt-4 max-w-xl mx-auto">Disponible pour missions courtes ou longues — startups, PME, porteurs de projets</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(s, i) in services"
          :key="s.title"
          class="service-card"
          v-reveal="i * 80"
        >
          <div class="text-3xl mb-4">{{ s.icon }}</div>
          <h3 class="text-white font-bold mb-2">{{ s.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed">{{ s.description }}</p>
        </div>
      </div>

      <div class="mt-12 text-center" v-reveal>
        <div class="inline-flex items-center gap-3 bg-surface border border-slate-700/60 rounded-2xl px-6 py-4 flex-wrap justify-center">
          <span class="text-slate-400 text-sm">Disponible sur :</span>
          <span v-for="p in freelancePlatforms" :key="p" class="skill-tag">{{ p }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services, freelancePlatforms } from '@/data/index.js'
</script>
