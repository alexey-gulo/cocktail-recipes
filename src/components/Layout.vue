<template>
  <div class="layout">
    <header class="layout__header">
      <Menu>
        <Sidebar />
      </Menu>
    </header>

    <aside class="layout__aside">
      <Sidebar />
    </aside>

    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Menu from '@/components/Menu.vue'
</script>

<style lang="scss">
$layout-max-width: 1024px;
$layout-border-color: #e9e9e9;
$layout-aside-width: 240px;

.layout {
  min-height: 100dvh;
  max-width: $layout-max-width;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: stretch;

    border-left: 1px solid $layout-border-color;
    border-right: 1px solid $layout-border-color;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;

    border-bottom: 1px solid $layout-border-color;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  &__aside {
    display: none;
    width: $layout-aside-width;
    flex-shrink: 0;
    border-right: 1px solid $layout-border-color;

    @media screen and (min-width: 1024px) {
      display: block;
    }
  }

  &__main {
    flex-grow: 1;
    height: 100%;
  }
}
</style>
