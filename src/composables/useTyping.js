import { ref, onMounted, onUnmounted } from 'vue'

export function useTyping(words, { initialDelay = 600 } = {}) {
  const text  = ref('')
  let wi = 0, ci = 0, deleting = false, timer = null

  const tick = () => {
    const word = words[wi]
    text.value = deleting ? word.slice(0, ci--) : word.slice(0, ci++)
    let delay = deleting ? 55 : 95
    if (!deleting && ci > word.length)  { delay = 1800; deleting = true }
    else if (deleting && ci < 0)        { deleting = false; wi = (wi + 1) % words.length; ci = 0; delay = 350 }
    timer = setTimeout(tick, delay)
  }

  onMounted(()  => { timer = setTimeout(tick, initialDelay) })
  onUnmounted(() => clearTimeout(timer))

  return { text }
}
