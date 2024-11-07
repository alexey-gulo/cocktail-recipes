<template>
  <nav class="sidebar">
    <ul class="sidebar__list">
      <li
        v-for="cocktail in cocktailsRef"
        :key="cocktail"
        class="sidebar__item">
        <RouterLink
          :to="`/cocktails/${cocktail}`"
          class="sidebar__link"
          active-class="sidebar__link_active">
          {{ prepareTitle(cocktail) }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { CocktailCode } from '../types/cocktail'
import { cocktails } from '@/config/cocktails'

// Hooks
const cocktailsRef = ref(cocktails)

// Methods
const prepareTitle = (cocktailCode: CocktailCode): string => {
  return cocktailCode.charAt(0).toUpperCase() + cocktailCode.slice(1)
}
</script>

<style lang="scss">
$sidebar-link-color: #333;
$sidebar-link-font-size: 1.25rem;
$sidebar-link-bg-color: #f0f0f0;
$sidebar-link-bg-color-active: #dbdbdb;
$sidebar-link-bg-color-hover: #e6e6e6;

.sidebar {
  padding: 1rem;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-left: 0;
  }

  &__item {
    display: block;
    list-style: none;
  }

  &__link {
    display: block;
    padding: 0.5rem 1rem;

    color: $sidebar-link-color;
    font-size: $sidebar-link-font-size;

    border-radius: 0.25rem;
    background-color: $sidebar-link-bg-color;
    text-decoration: none;

    transition: background-color 150ms ease-in-out;

    &:hover {
      background-color: $sidebar-link-bg-color-hover;
    }

    &_active {
      background-color: $sidebar-link-bg-color-active;
    }
  }
}
</style>
