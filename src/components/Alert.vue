<template>
  <div class="alert"><slot /></div>
</template>

<style lang="scss">
$alert-bg-color: #c25050;
$alert-color: #ffffff;

.alert {
  padding: 1rem;

  background-color: $alert-bg-color;
  border-radius: 0.5rem;
  color: $alert-color;
}
</style>
