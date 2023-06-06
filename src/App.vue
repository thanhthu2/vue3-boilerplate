<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const $route = useRoute()
const layout = computed(() => $route.meta.layout || undefined)

</script>

<template>
  <div class="app-layout-base" v-if="layout">
    <component :is="layout">
      <Suspense>
        <RouterView :key="$route.path" />
      </Suspense>
    </component>
    <q-btn to="/login" label="Login" outline color="purple" />
    <q-btn to="/" label="Home" outline color="purple" />
  </div>
</template>

<style scoped lang="scss">
.app-layout-base {
  width: 100vw;
  height: 100vh;
}
</style>
