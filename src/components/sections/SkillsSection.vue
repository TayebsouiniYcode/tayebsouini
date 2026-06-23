<template>
  <section id="skills" class="py-28 bg-surface/30 relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-14" v-reveal>
        <h2 class="section-title mx-auto">Compétences techniques</h2>
        <p class="text-slate-400 mt-4 max-w-xl mx-auto">Stack maîtrisé après 3 ans de développement professionnel et de formation</p>
      </div>

      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div
          v-for="(cat, i) in skills"
          :key="cat.category"
          class="card p-6"
          v-reveal="i * 80"
          :ref="el => { if (el) cardRefs[i] = el }"
        >
          <h3 class="flex items-center gap-2 text-white font-bold mb-5 text-lg">
            <span>{{ cat.icon }}</span> {{ cat.category }}
          </h3>
          <div class="space-y-3">
            <div v-for="item in cat.items" :key="item.name">
              <div class="flex justify-between text-sm mb-1.5">
                <span class="text-slate-300 font-medium">{{ item.name }}</span>
                <span class="text-slate-500">{{ item.level }}%</span>
              </div>
              <div class="progress-bar">
                <div
                  class="progress-fill"
                  :style="{ transform: animated.has(i) ? `scaleX(${item.level / 100})` : 'scaleX(0)' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { skills } from '@/data/index.js'

const cardRefs = ref([])
const animated = ref(new Set())
let observers  = []

onMounted(() => {
  cardRefs.value.forEach((card, i) => {
    if (!card) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { animated.value = new Set([...animated.value, i]); obs.disconnect() }
      })
    }, { threshold: 0.2 })
    obs.observe(card)
    observers.push(obs)
  })
})
onUnmounted(() => observers.forEach(o => o.disconnect()))
</script>
