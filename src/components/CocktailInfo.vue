<template>
  <div
    v-for="cocktail in drinks"
    :key="cocktail.idDrink"
    class="cocktail-info">
    <div class="cocktail-info__main">
      <h2 class="cocktail-info__title">{{ cocktail.strDrink }}</h2>

      <div class="cocktail-info__group">
        <p class="cocktail-info__item">{{ cocktail.strCategory }}</p>
        <p class="cocktail-info__item">{{ cocktail.strAlcoholic }}</p>
        <p class="cocktail-info__item">{{ cocktail.strGlass }}</p>
      </div>
      <div class="cocktail-info__group">
        <div class="cocktail-info__item">Instructions:</div>

        <div class="cocktail-info__item">{{ cocktail.strInstructions }}</div>
      </div>

      <div class="cocktail-info__group">
        <div class="cocktail-info__item">List of ingredients:</div>

        <div v-for="i in calcIngredientsRange(cocktail)" :key="i" class="cocktail-info__row">
          <div class="cocktail-info__col">{{ cocktail[`strMeasure${i}` as keyof Cocktail] }}</div>
          <div class="cocktail-info__col">{{ cocktail[`strIngredient${i}` as keyof Cocktail] }}</div>
        </div>
      </div>
    </div>

    <picture class="cocktail-info__cover">
      <img
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink"
        class="cocktail-info__cover-image"
        width="300"
        height="300"
        loading="lazy"
        decoding="async">
    </picture>
  </div>
</template>

<script setup lang="ts">
import { Cocktail } from '@/types/cocktail';

defineProps<{
  drinks: Cocktail[]
}>()

// Methods
const calcIngredientsRange = (cocktail: Cocktail): number => {
  const keys = Object.keys(cocktail)
  const filteredKeys: string[] = keys.filter((key: string) => key.includes('strIngredient'))
  const filteredKeysWithValue = filteredKeys.filter((key: string) => !!cocktail[key as keyof Cocktail])

  return filteredKeysWithValue.length
}
</script>

<style lang="scss">
$cocktail-info-cover-width-xs: 100%;
$cocktail-info-cover-width-lg: 300px;

.cocktail-info {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  &__main {
    flex-grow: 1;
  }

  &__cover {
    display: block;
    width: $cocktail-info-cover-width-xs;
    aspect-ratio: 1;
    flex-shrink: 0;
    order: -1;

    @media screen and (min-width: 1024px) {
      width: $cocktail-info-cover-width-lg;
      align-self: flex-start;
      order: initial;
    }

    &-image {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  &__title {
    margin-top: 0;

    font-size: 3rem;
  }

  &__group {
    margin-bottom: 1.5rem;
  }

  &__item {
    margin: 0.5rem 0;
  }

  &__row {
    display: flex;
    gap: 1rem;
  }

  &__col {
    flex: 1 1 0;
  }
}
</style>
