<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="font-mono font-bold text-xl text-primary hover:text-secondary transition-colors">
        &lt;TS /&gt;
      </RouterLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-medium">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="nav-link text-slate-400 hover:text-white transition-colors"
            :class="{ 'text-primary': isActive(link) }"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- Desktop right -->
      <div class="hidden md:flex items-center gap-3">
        <span class="available-badge">
          <span class="available-dot"></span>
          Disponible
        </span>
        <a :href="personal.cv" target="_blank" class="btn-primary text-sm py-2 px-4">
          Télécharger CV
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        class="md:hidden text-slate-400 hover:text-white focus:outline-none"
        :aria-label="mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        @click="mobileOpen = !mobileOpen"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else             stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-surface/98 backdrop-blur-md border-t border-slate-700/50"
      >
        <ul class="flex flex-col px-6 py-5 gap-4 text-sm font-medium">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="block text-slate-400 hover:text-white transition-colors"
              :class="{ 'text-primary': isActive(link) }"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
          <li class="pt-2 border-t border-slate-700">
            <a :href="personal.cv" target="_blank" class="btn-primary text-sm inline-flex">
              Télécharger CV
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { personal } from '@/data/index.js'

const route      = useRoute()
const isScrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { to: '/',          label: 'Accueil',     exact: true  },
  { to: '/#about',    label: 'À propos',    hash: true   },
  { to: '/#skills',   label: 'Compétences', hash: true   },
  { to: '/projects',  label: 'Projets',     exact: true  },
  { to: '/#contact',  label: 'Contact',     hash: true   },
]

const isActive = link => {
  if (link.hash) return false
  return route.path === link.to
}

const onScroll = () => { isScrolled.value = window.scrollY > 60 }

onMounted(()  => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: opacity .2s, transform .2s; }
.mobile-menu-enter-from,
.mobile-menu-leave-to    { opacity: 0; transform: translateY(-8px); }
</style>
