<script lang="ts" setup="">

import {useMenu} from "~/composables/states";

const isMenuVisible = useMenu()

const menuItems = [
  {
    to: "/",
    icon: "pi pi-circle-fill",
    text: "Asosiy"
  },
  {
    to: "/orders",
    icon: "pi pi-calendar",
    text: "Uchrashuvlar"
  },
  {
    to: "/settings",
    icon: "pi pi-cog",
    text: "Sozlamalar"
  },
  {
    to: "/notifications",
    icon: "pi pi-bell",
    text: "Bildirishnomalar"
  },
  // {
  //   to: "/",
  //   icon: "pi pi-globe",
  //   text: "Til: O’zbekcha"
  // }
]
</script>

<template>

  <Sidebar
    v-model:visible="isMenuVisible"
    position="left"
    :close-icon="null"
    header="1on.uz"
  >
    <ul class="menu-content">
      <li v-for="item in menuItems" :key="item.text">
        <NuxtLink :to="item.to" @click="isMenuVisible = false">
          <i :class="item.icon" />
          {{ item.text }}
        </NuxtLink>
      </li>
    </ul>
  </Sidebar>
</template>

<style lang="scss">
.menu {
  background: rgba(24, 28, 32, 1);
  width: calc(100vw - 40px);
}
.menu-content {
  display: grid;
  gap: 5px;

  a {
    font-size: 14px;
    text-decoration: none;
    border-radius: 100px;
    padding: 18px 16px;
    display: flex;
    gap: 10px;
    align-items: center;
    color: $on-secondary;
    transition: .3s;

    &.router-link-active, &:hover {
      background: $secondary;
    }
  }
}
</style>