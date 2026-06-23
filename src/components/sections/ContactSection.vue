<template>
  <section id="contact" class="py-28 bg-surface/30 relative">
    <div class="max-w-5xl mx-auto px-6">

      <div class="text-center mb-14" v-reveal>
        <h2 class="section-title mx-auto">Travaillons ensemble</h2>
        <p class="text-slate-400 mt-4 max-w-lg mx-auto">
          Disponible pour missions freelance. N'hésitez pas à me contacter pour discuter de votre projet !
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-10 items-start">

        <!-- Contact info -->
        <div class="lg:col-span-2 space-y-3" v-reveal>
          <a v-if="personal.email" :href="`mailto:${personal.email}`" class="contact-card">
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <EmailIcon :size="20" />
            </div>
            <div>
              <div class="text-xs text-slate-500 mb-0.5">Email</div>
              <div class="text-white font-medium">{{ personal.email }}</div>
            </div>
          </a>

          <div v-if="personal.location" class="contact-card">
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <div class="text-xs text-slate-500 mb-0.5">Localisation</div>
              <div class="text-white font-medium">{{ personal.location }}</div>
            </div>
          </div>

          <div class="flex gap-3 mt-4">
            <a v-if="personal.github"   :href="personal.github"   target="_blank" rel="noopener" class="social-icon" aria-label="GitHub"><GithubIcon /></a>
            <a v-if="personal.linkedin" :href="personal.linkedin" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>

        <!-- Form -->
        <div class="lg:col-span-3" v-reveal="200">
          <form
            @submit.prevent="handleSubmit"
            class="bg-surface border border-slate-700/50 rounded-2xl p-8 space-y-5"
          >
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm text-slate-400 mb-2">Nom *</label>
                <input v-model="form.name" type="text" required placeholder="Votre nom" class="form-input" />
              </div>
              <div>
                <label class="block text-sm text-slate-400 mb-2">Email *</label>
                <input v-model="form.email" type="email" required placeholder="votre@email.com" class="form-input" />
              </div>
            </div>
            <div>
              <label class="block text-sm text-slate-400 mb-2">Sujet</label>
              <input v-model="form.subject" type="text" placeholder="Mission freelance, question..." class="form-input" />
            </div>
            <div>
              <label class="block text-sm text-slate-400 mb-2">Message *</label>
              <textarea v-model="form.message" rows="5" required placeholder="Décrivez votre projet ou votre besoin..." class="form-input resize-none"></textarea>
            </div>

            <button type="submit" :disabled="sending" class="btn-primary w-full justify-center text-base py-3">
              {{ sending ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>

            <Transition name="fade">
              <p v-if="statusMsg" class="text-center text-sm text-emerald-400">{{ statusMsg }}</p>
            </Transition>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { personal }      from '@/data/index.js'
import EmailIcon         from '@/components/icons/EmailIcon.vue'
import GithubIcon        from '@/components/icons/GithubIcon.vue'
import LinkedinIcon      from '@/components/icons/LinkedinIcon.vue'

const form    = reactive({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const statusMsg = ref('')

const handleSubmit = async () => {
  sending.value = true
  await new Promise(r => setTimeout(r, 800))
  sending.value = false
  statusMsg.value = 'Message envoyé ! Je vous répondrai bientôt. 🎉'
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  setTimeout(() => { statusMsg.value = '' }, 5000)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .3s; }
.fade-enter-from,  .fade-leave-to      { opacity: 0; }
</style>
