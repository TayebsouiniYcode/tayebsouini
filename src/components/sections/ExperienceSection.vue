<template>
  <section id="experience" class="py-28 relative">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-14" v-reveal>
        <h2 class="section-title mx-auto">Expérience & Formation</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Experience -->
        <div v-reveal>
          <h3 class="text-base font-semibold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-3">
            <span class="w-6 h-px bg-primary"></span> Expérience professionnelle
          </h3>
          <div>
            <div
              v-for="item in experience"
              :key="item.role"
              class="timeline-item"
            >
              <div class="text-white font-bold text-lg">{{ item.role }}</div>
              <div class="text-primary font-medium text-sm mt-0.5">{{ item.company }}</div>
              <div class="text-slate-500 text-xs mt-1 mb-3 font-mono">{{ item.period }}</div>
              <p class="text-slate-400 text-sm leading-relaxed">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span v-for="tag in item.tags" :key="tag" class="skill-badge">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div v-reveal="200">
          <h3 class="text-base font-semibold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-3">
            <span class="w-6 h-px bg-secondary"></span> Formation
          </h3>
          <div>
            <div
              v-for="item in education"
              :key="item.degree"
              class="timeline-item"
            >
              <div class="text-white font-bold text-lg">{{ item.degree }}</div>
              <div class="text-primary font-medium text-sm mt-0.5">{{ item.school }}</div>
              <div class="text-slate-500 text-xs mt-1 mb-3 font-mono">{{ item.period }}</div>
              <p class="text-slate-400 text-sm leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { experience, education } from '@/data/index.js'
</script>
