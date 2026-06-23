<template>
  <main>
    <!-- Page Hero -->
    <section class="page-hero relative overflow-hidden">
      <div class="absolute inset-0 grid-bg"></div>
      <div class="blob blob-1" style="opacity:.07"></div>
      <div class="blob blob-2" style="opacity:.06"></div>

      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <nav class="breadcrumb justify-center mb-6">
          <RouterLink to="/">Accueil</RouterLink>
          <span class="text-slate-600 mx-1">/</span>
          <span class="text-slate-300">Projets</span>
        </nav>
        <h1 class="text-4xl md:text-5xl font-black text-white mb-4">
          Mes <span class="gradient-text">Projets</span>
        </h1>
        <p class="text-slate-400 max-w-xl mx-auto text-lg">
          Applications web développées de A à Z — conception UML, backend Laravel, API REST et frontend Vue.js.
        </p>
      </div>
    </section>

    <!-- Filters + Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">

        <!-- Filters -->
        <div class="flex gap-3 flex-wrap mb-10">
          <button
            v-for="cat in categories"
            :key="cat.value"
            class="filter-btn"
            :class="{ active: activeFilter === cat.value }"
            @click="activeFilter = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Grid -->
        <TransitionGroup
          name="project-list"
          tag="div"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <ProjectCard
            v-for="proj in filteredProjects"
            :key="proj.id"
            :project="proj"
          />
        </TransitionGroup>

        <!-- Empty state -->
        <div v-if="!filteredProjects.length" class="text-center py-20 text-slate-500">
          <div class="text-5xl mb-4">🔍</div>
          <p class="text-lg">Aucun projet dans cette catégorie.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-surface/30">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <div class="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-10">
          <div class="text-4xl mb-4">💼</div>
          <h2 class="text-2xl font-bold text-white mb-3">Vous avez un projet ?</h2>
          <p class="text-slate-400 mb-8 max-w-md mx-auto">
            Je suis disponible pour des missions freelance en Laravel, Vue.js et développement Full Stack.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <RouterLink to="/#contact" class="btn-primary">Me contacter</RouterLink>
            <RouterLink to="/" class="btn-outline">Retour à l'accueil</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects }      from '@/data/index.js'
import ProjectCard       from '@/components/ui/ProjectCard.vue'

const activeFilter = ref('tous')

const categories = computed(() => {
  const labels = { tous: 'Tous', fullstack: 'Full Stack', backend: 'Backend', frontend: 'Frontend', mobile: 'Mobile' }
  const cats   = ['tous', ...new Set(projects.map(p => p.category).filter(Boolean))]
  return cats.map(v => ({ value: v, label: labels[v] || v }))
})

const filteredProjects = computed(() =>
  activeFilter.value === 'tous'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)
</script>

<style scoped>
.project-list-enter-active { transition: all .35s ease; }
.project-list-leave-active { transition: all .25s ease; }
.project-list-enter-from   { opacity: 0; transform: translateY(20px); }
.project-list-leave-to     { opacity: 0; transform: scale(.95); }
.project-list-move         { transition: transform .35s ease; }
</style>
