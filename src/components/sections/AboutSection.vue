<template>
  <section id="about" class="py-28 relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Left: text -->
        <div v-reveal>
          <h2 class="section-title mb-8">À propos de moi</h2>
          <div class="space-y-4 text-slate-400 leading-relaxed text-[1.05rem]">
            <p v-for="(p, i) in about.paragraphs" :key="i" v-html="p"></p>
          </div>
          <div class="flex gap-4 mt-8 flex-wrap">
            <a href="#contact" class="btn-primary">Travaillons ensemble</a>
            <a :href="personal.cv" target="_blank" class="btn-outline">Télécharger CV</a>
          </div>
        </div>

        <!-- Right: stats + differentiators -->
        <div class="space-y-6" v-reveal="200">
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in about.stats" :key="stat.label" class="stat-card">
              <div class="text-3xl font-extrabold gradient-text mb-1">{{ stat.number }}</div>
              <div class="text-slate-400 text-sm">{{ stat.label }}</div>
            </div>
          </div>

          <div class="mt-4">
            <p class="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Ce qui me différencie</p>
            <div class="grid sm:grid-cols-2 gap-3">
              <div
                v-for="d in about.differentiators"
                :key="d.title"
                class="bg-surface border border-slate-700/60 rounded-xl p-4 hover:border-primary/30 transition-colors"
              >
                <div class="text-2xl mb-2">{{ d.icon }}</div>
                <div class="text-white font-semibold text-sm mb-1">{{ d.title }}</div>
                <div class="text-slate-500 text-xs leading-relaxed">{{ d.text }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { personal, about } from '@/data/index.js'
</script>
