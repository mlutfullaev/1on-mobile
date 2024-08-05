<script lang="ts" setup>
import { useMenu, useNotification } from '~/composables/states'

const isNotificationVisible = useNotification()
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
    <button @click="isNotificationVisible = true">
      <i class="pi pi-bell" />
    </button>
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
