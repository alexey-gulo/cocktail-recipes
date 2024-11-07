<template>
  <Layout>
    <Container>
      <Transition name="fade">
        <CocktailInfo v-if="currentCocktail" :drinks="currentCocktail" />
        <Spinner v-else />
      </Transition>
    </Container>
  </Layout>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCocktailStore } from '@/stores/useCocktailStore.ts'

import Layout from '@/components/Layout.vue'
import CocktailInfo from '@/components/CocktailInfo.vue'
import Container from '@/components/Container.vue'
import Spinner from '@/components/Spinner.vue'

// Stores
const cocktailStore = useCocktailStore()
const { currentCocktail } = storeToRefs(cocktailStore)
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
