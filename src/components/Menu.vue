<template>
  <a href="#" role="button" class="menu__toggle" @click="show">
    <Icon name="menu" size="32" />
  </a>

  <div :class="{menu: true, menu_active: active}">
    <div class="menu__header">
      <a href="#" role="button" class="menu__close" @click="hide">
        <Icon name="close" size="32" />
      </a>
    </div>

    <div class="menu__body" @click="hide">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from '@/components/Icon.vue'

// Hooks
const active = ref<boolean>(false)

// Methods
const show = () => {
  active.value = true
}

const hide = () => {
  active.value = false
}
</script>

<style lang="scss">
$menu-bg-color: #fff;
$menu-header-border-color: #e9e9e9;
$menu-close-color: #333;
$menu-close-color-hover: #717171;

.menu {
  position: fixed;
  inset: 0;
  z-index: 10;

  max-height: 100dvh;
  overflow: auto;

  background-color: $menu-bg-color;
  transform: translateX(100%);
  opacity: 0;

  transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;

  &_active {
    transform: translateX(0);
    opacity: 1;
  }

  &__header {
    position: sticky;
    top: 0;

    display: flex;
    padding: 0.5rem;

    border-bottom: 1px solid $menu-header-border-color;
  }

  &__close,
  &-toggle {
    padding: 0.25rem;
    margin-left: auto;

    color: $menu-close-color;

    transition: color 150ms ease-in-out;

    &:hover {
      color: $menu-close-color-hover;
    }
  }
}

body:has(.menu_active) {
  overflow: hidden;
}
</style>
