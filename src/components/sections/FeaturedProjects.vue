<template>
  <section id="projects-preview" class="py-28 relative">
    <div class="max-w-7xl mx-auto px-6">

      <div class="flex items-end justify-between mb-14 flex-wrap gap-4" v-reveal>
        <div>
          <h2 class="section-title">Projets phares</h2>
          <p class="text-slate-400 mt-4 max-w-lg">Applications web développées de A à Z : conception, backend, API et frontend.</p>
        </div>
        <RouterLink to="/projects" class="btn-outline flex-shrink-0">
          Tous les projets <ArrowRightIcon :size="15" />
        </RouterLink>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProjectCard
          v-for="(proj, i) in featured"
          :key="proj.id"
          :project="proj"
          v-reveal="i * 100"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed }   from 'vue'
import { projects }   from '@/data/index.js'
import ProjectCard    from '@/components/ui/ProjectCard.vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'

const featured = computed(() => projects.filter(p => p.featured))
</script>
