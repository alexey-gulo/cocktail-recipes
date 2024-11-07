<template>
  <div class="container"><slot /></div>
</template>

<style lang="scss">
$container-max-width-xs: 480px;
$container-max-width-lg: 768px;

.container {
  max-width: $container-max-width-xs;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: $container-max-width-lg;
  }
}
</style>
