<script setup lang="ts">
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'
</script>

<template>
  <ElButton v-bind="$attrs">
    <slot />
  </ElButton>
</template>
