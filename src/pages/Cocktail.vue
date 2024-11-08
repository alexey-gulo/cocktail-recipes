<template>
  <Layout>
    <Container>
      <Transition name="fade">
        <Alert v-if="error">{{ error }}</Alert>

        <Spinner v-else-if="isLoading" />

        <div v-else-if="currentDrinks">
          <CocktailInfo :drinks="currentDrinks" />
        </div>
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
import Alert from '@/components/Alert.vue'

// Stores
const cocktailStore = useCocktailStore()
const { currentDrinks, isLoading, error } = storeToRefs(cocktailStore)
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
