<script setup lang="ts">
import { Table } from 'ant-design-vue'
</script>

<template>
  <Table v-bind="$attrs">
    <template v-for="slot in Object.keys($slots)" :key="slot" #[slot]="attrs">
      <slot :name="slot" v-bind="attrs" />
    </template>
  </Table>
</template>
