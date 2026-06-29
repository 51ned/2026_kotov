import { onMount } from 'svelte'


export const useMediaQuery = (query: string) => {
  let matches = $state(false)

  onMount(() => {
    const mq = window.matchMedia(query)

    const update = () => {
      matches = mq.matches
    }

    update()
    mq.addEventListener('change', update)

    return () => {
      mq.removeEventListener('change', update)
    }
  })

  return {
    get matches() {
      return matches
    }
  }
}