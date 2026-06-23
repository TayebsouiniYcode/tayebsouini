<template>
  <RouterLink :to="`/projects/${project.id}`" class="project-card">
    <!-- Thumbnail -->
    <div class="relative overflow-hidden">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="project-thumb w-full h-52 object-cover"
        loading="lazy"
      />
      <div
        v-else
        class="w-full h-52 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent flex items-center justify-center text-7xl relative"
      >
        <div class="absolute inset-0 grid-bg opacity-30"></div>
        <span class="relative">{{ project.emoji }}</span>
      </div>

      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <span class="text-white text-sm font-semibold flex items-center gap-2">
          Voir le projet <ArrowRightIcon :size="14" />
        </span>
      </div>

      <div class="absolute top-3 right-3">
        <span class="skill-tag text-xs uppercase">{{ project.category }}</span>
      </div>
      <div v-if="project.featured" class="absolute top-3 left-3">
        <span class="text-xs font-semibold bg-primary text-white rounded-full px-2.5 py-0.5">⭐ Phare</span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-start justify-between gap-3 mb-2">
        <h2 class="text-white font-bold text-xl leading-tight">{{ project.title }}</h2>
        <span class="text-slate-600 text-xs font-mono flex-shrink-0 mt-1">{{ project.year }}</span>
      </div>
      <p class="text-primary text-sm font-medium mb-3">{{ project.subtitle }}</p>
      <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{{ project.description }}</p>

      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in project.tags" :key="tag" class="skill-badge">{{ tag }}</span>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-slate-700/50">
        <span class="text-primary text-sm font-medium flex items-center gap-1.5">
          Voir les détails <ArrowRightIcon :size="14" />
        </span>
        <div class="flex gap-2 text-slate-500">
          <GithubIcon v-if="project.github" :size="16" />
          <ExternalLinkIcon v-if="project.demo" :size="15" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import ArrowRightIcon    from '@/components/icons/ArrowRightIcon.vue'
import GithubIcon        from '@/components/icons/GithubIcon.vue'
import ExternalLinkIcon  from '@/components/icons/ExternalLinkIcon.vue'

defineProps({ project: { type: Object, required: true } })
</script>
