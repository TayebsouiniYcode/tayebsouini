<template>
  <footer class="py-12 border-t border-slate-800/60">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <div class="text-center md:text-left">
          <RouterLink to="/" class="font-mono font-bold text-xl text-primary">&lt;TS /&gt;</RouterLink>
          <p class="text-slate-500 text-sm mt-1">{{ personal.name }} — Développeur Full Stack</p>
        </div>

        <div class="flex gap-4">
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

        <p class="text-slate-600 text-xs text-center">
          © {{ year }} {{ personal.name }} · Conçu & développé avec passion
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { personal } from '@/data/index.js'
import GithubIcon   from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import EmailIcon    from '@/components/icons/EmailIcon.vue'

const year = new Date().getFullYear()
</script>
