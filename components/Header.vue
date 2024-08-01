<script lang="ts" setup>
import {useMenu} from "~/composables/states";

const isMenuVisible = useMenu()
</script>

<template>
  <header>
    <button @click="isMenuVisible = true">
      <i class="pi pi-bars" />
    </button>
    <NuxtLink to="/">
      1on.uz
    </NuxtLink>
    <NuxtLink to="/notifications">
      <i class="pi pi-bell" />
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
}
</style>
