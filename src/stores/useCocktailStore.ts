import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { Cocktail, CocktailCode } from '@/types/cocktail'
import { fetchCocktail } from '@/services/cocktail'

export const useCocktailStore = defineStore('cocktail', () => {
  const route = useRoute()
  const cache = ref<Record<string, Cocktail[]>>({})

  const currentCocktailCode = computed(() => route.params.cocktailCode)
  const currentCocktail = computed(() => {
    return cache.value[currentCocktailCode.value as CocktailCode]
  })
  const isCurrentCocktailCached = computed(() => {
    return !!cache.value[currentCocktailCode.value as CocktailCode]
  })

  watch(
    currentCocktailCode,
    async (cocktailCode) => {
      if (!isCurrentCocktailCached.value) {
        const drinks = await fetchCocktail(cocktailCode as CocktailCode)
        cache.value[currentCocktailCode.value as CocktailCode] = drinks
      }
    },
    { immediate: true }
  )

  return {
    cache,
    currentCocktail,
    isCurrentCocktailCached
  }
})
