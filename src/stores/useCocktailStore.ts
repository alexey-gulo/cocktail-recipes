import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { ref, computed, watch, onMounted } from 'vue'
import { Cocktail, CocktailCode } from '@/types/cocktail'
import { fetchCocktail } from '@/services/cocktail'

export const useCocktailStore = defineStore('cocktail', () => {
  const route = useRoute()
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const cache = ref<Record<string, Cocktail[]>>({})

  const currentCocktailParam = computed((): CocktailCode => {
    if (Array.isArray(route.params.cocktailCode)) {
      return route.params.cocktailCode[0] as CocktailCode
    } else {
      return route.params.cocktailCode as CocktailCode
    }
  })
  const currentDrinks = computed((): Cocktail[] => {
    return cache.value[currentCocktailParam.value as CocktailCode]
  })
  const isCurrentCocktailCached = computed((): boolean => {
    return Boolean(cache.value[currentCocktailParam.value as CocktailCode])
  })

  onMounted(() => fetchCurrentCocktail(currentCocktailParam.value))

  watch(
    currentCocktailParam,
    async (cocktailCode) => {
      if (isCurrentCocktailCached.value) return

      await fetchCurrentCocktail(cocktailCode)
    }
  )

  // Methods
  const fetchCurrentCocktail = async (cocktailCode: CocktailCode): Promise<void> => {
    clearError()
    startLoading()

    try {
      const drinks = await fetchCocktail(cocktailCode as CocktailCode)
      cache.value[currentCocktailParam.value as CocktailCode] = drinks
    } catch (error) {
      setError((error as Error).message)
    }

    stopLoading()
  }

  const startLoading = (): void => {
    isLoading.value = true
  }

  const stopLoading = (): void => {
    isLoading.value = false
  }

  const setError = (message: string): void => {
    error.value = message
  }

  const clearError = (): void => {
    error.value = null
  }

  return {
    currentDrinks,
    isLoading,
    error
  }
})
