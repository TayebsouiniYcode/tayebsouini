<template>
  <main>
    <!-- Not found -->
    <section v-if="!project" class="min-h-screen flex items-center justify-center text-center py-32 px-6">
      <div>
        <div class="text-6xl mb-6">🔍</div>
        <h2 class="text-2xl font-bold text-white mb-3">Projet introuvable</h2>
        <p class="text-slate-400 mb-8">Le projet demandé n'existe pas ou a été supprimé.</p>
        <RouterLink to="/projects" class="btn-primary">Voir tous les projets</RouterLink>
      </div>
    </section>

    <template v-else>
      <!-- ── PROJECT HERO ────────────────────────────────── -->
      <section class="page-hero relative overflow-hidden">
        <div class="absolute inset-0 grid-bg"></div>
        <div class="blob blob-1" style="opacity:.07"></div>

        <div class="relative max-w-7xl mx-auto px-6">
          <!-- Breadcrumb -->
          <nav class="breadcrumb mb-6">
            <RouterLink to="/">Accueil</RouterLink>
            <span class="text-slate-600 mx-1">/</span>
            <RouterLink to="/projects">Projets</RouterLink>
            <span class="text-slate-600 mx-1">/</span>
            <span class="text-slate-300">{{ project.title }}</span>
          </nav>

          <div class="flex flex-col lg:flex-row items-start gap-12">
            <!-- Info -->
            <div class="flex-1">
              <div class="text-5xl mb-4">{{ project.emoji }}</div>
              <div class="flex items-center gap-3 mb-3 flex-wrap">
                <span class="skill-tag text-xs uppercase tracking-widest">{{ project.category }}</span>
                <span class="text-slate-500 text-sm font-mono">{{ project.year }}</span>
              </div>
              <h1 class="text-4xl md:text-5xl font-black text-white mb-3">{{ project.title }}</h1>
              <p class="text-xl text-primary font-medium mb-6">{{ project.subtitle }}</p>
              <p class="text-slate-400 text-lg leading-relaxed max-w-2xl">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mt-6">
                <span v-for="tag in project.tags" :key="tag" class="skill-badge">{{ tag }}</span>
              </div>
              <div class="flex gap-4 mt-8 flex-wrap">
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="btn-primary">
                  <GithubIcon /> GitHub
                </a>
                <a v-if="project.demo"   :href="project.demo"   target="_blank" rel="noopener" class="btn-outline">
                  <ExternalLinkIcon /> Demo live
                </a>
                <RouterLink to="/projects" class="btn-ghost">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                  </svg>
                  Tous les projets
                </RouterLink>
              </div>
            </div>

            <!-- Visual -->
            <div class="flex-shrink-0 w-full lg:w-96">
              <div class="rounded-2xl overflow-hidden border border-slate-700/50 bg-surface aspect-video flex items-center justify-center">
                <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
                <span v-else class="text-8xl">{{ project.emoji }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── PROJECT BODY ────────────────────────────────── -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid lg:grid-cols-3 gap-12">

            <!-- Main content -->
            <div class="lg:col-span-2 space-y-12">

              <!-- Long description -->
              <div v-reveal>
                <h2 class="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <span class="w-8 h-0.5 bg-primary"></span> Présentation du projet
                </h2>
                <div class="text-slate-400 leading-relaxed space-y-4 text-[1.02rem]">
                  <p v-for="(para, i) in project.longDescription" :key="i">{{ para }}</p>
                </div>
              </div>

              <!-- Features -->
              <div v-if="project.features?.length" v-reveal>
                <h2 class="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <span class="w-8 h-0.5 bg-primary"></span> Fonctionnalités clés
                </h2>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div
                    v-for="feature in project.features"
                    :key="feature"
                    class="flex items-start gap-3 bg-surface border border-slate-700/50 rounded-xl p-4 hover:border-primary/30 transition-colors"
                  >
                    <div class="flex-shrink-0 w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center text-primary mt-0.5">
                      <CheckIcon />
                    </div>
                    <span class="text-slate-300 text-sm">{{ feature }}</span>
                  </div>
                </div>
              </div>

              <!-- Challenges -->
              <div v-if="project.challenges?.length" v-reveal>
                <h2 class="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <span class="w-8 h-0.5 bg-secondary"></span> Défis techniques
                </h2>
                <div class="space-y-3">
                  <div
                    v-for="(challenge, i) in project.challenges"
                    :key="i"
                    class="flex items-start gap-4 bg-surface border border-slate-700/50 rounded-xl p-4 hover:border-secondary/30 transition-colors"
                  >
                    <span class="text-secondary font-bold text-lg flex-shrink-0 font-mono">
                      {{ String(i + 1).padStart(2, '0') }}
                    </span>
                    <span class="text-slate-400 text-sm leading-relaxed">{{ challenge }}</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Sidebar -->
            <div class="space-y-6">
              <!-- Stack -->
              <div class="card p-6" v-reveal>
                <h3 class="text-white font-semibold mb-4">Stack technique</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in project.tags" :key="tag" class="skill-badge">{{ tag }}</span>
                </div>
              </div>

              <!-- Links -->
              <div v-if="project.github || project.demo" class="card p-6" v-reveal="100">
                <h3 class="text-white font-semibold mb-4">Liens</h3>
                <div class="space-y-3">
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank" rel="noopener"
                    class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm py-2 border-b border-slate-700/40"
                  >
                    <GithubIcon :size="16" /> Voir sur GitHub <ExternalLinkIcon :size="12" class="ml-auto" />
                  </a>
                  <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank" rel="noopener"
                    class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm py-2"
                  >
                    <ExternalLinkIcon :size="16" /> Voir la démo <ExternalLinkIcon :size="12" class="ml-auto" />
                  </a>
                </div>
              </div>

              <!-- Back button -->
              <RouterLink to="/projects" class="btn-outline w-full justify-center" v-reveal="200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Retour aux projets
              </RouterLink>

              <!-- Other projects -->
              <div v-reveal="300">
                <p class="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Autres projets</p>
                <div class="space-y-3">
                  <RouterLink
                    v-for="p in otherProjects"
                    :key="p.id"
                    :to="`/projects/${p.id}`"
                    class="flex items-center gap-3 p-3 bg-surface border border-slate-700/50 rounded-xl hover:border-primary/30 transition-colors group"
                  >
                    <span class="text-2xl flex-shrink-0">{{ p.emoji }}</span>
                    <div class="min-w-0">
                      <div class="text-white text-sm font-medium truncate group-hover:text-primary transition-colors">{{ p.title }}</div>
                      <div class="text-slate-500 text-xs truncate">{{ p.tags.slice(0, 2).join(' · ') }}</div>
                    </div>
                  </RouterLink>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </template>
  </main>
</template>

<script setup>
import { computed }     from 'vue'
import { useRoute }     from 'vue-router'
import { projects }     from '@/data/index.js'
import GithubIcon       from '@/components/icons/GithubIcon.vue'
import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon.vue'
import CheckIcon        from '@/components/icons/CheckIcon.vue'

const route   = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id) ?? null)
const otherProjects = computed(() => projects.filter(p => p.id !== route.params.id).slice(0, 3))
</script>
