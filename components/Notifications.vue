<script lang="ts" setup>
import { useNotification } from '~/composables/states'

const isNotificationVisible = useNotification()

const notifications = [
  {
    title: 'Eslatma',
    description: 'Bugun 9:00 da Topor barberda uchrashuv bor esingizdan chiqarmang.',
    to: '/'
  },
  {
    title: 'Barberiada chegirmalar',
    description: 'Birinchi soch turmagi uchun -10% chegirma',
    to: '/'
  },
  {
    title: 'Eslatma',
    description: 'Bugun 9:00 da Topor barberda uchrashuv bor esingizdan chiqarmang.',
    to: '/'
  },
  {
    title: 'Barberiada chegirmalar',
    description: 'Birinchi soch turmagi uchun -10% chegirma',
    to: '/'
  }
]
</script>

<template>
  <Sidebar
    v-model:visible="isNotificationVisible"
    position="right"
  >
    <template #container="{ closeCallback }">
      <div class="page-header">
        <button @click="closeCallback">
          <i class="pi pi-arrow-left" />
        </button>
        <h3>Bildirishnomalar</h3>
        <button>
          <i class="pi pi-check" />
        </button>
      </div>
      <div class="notifications">
        <NuxtLink
          v-for="notification in notifications"
          :key="notification.description"
          :to="notification.to"
          class="notifications-item"
          @click="closeCallback"
        >
          <h3>{{ notification.title }} <i class="pi pi-chevron-right" /></h3>
          <p>{{ notification.description }}</p>
        </NuxtLink>
      </div>
    </template>
  </Sidebar>
</template>

<style lang="scss" scoped>
.notifications {
  padding: 20px;
  display: grid;
  gap: 20px;

  h3 {
    font-size: 16px;
    width: 100%;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;

    i {
      margin-left: auto;
    }
  }
  p {
    color: $light-grey;
    font-size: 14px;
  }
}
</style>
