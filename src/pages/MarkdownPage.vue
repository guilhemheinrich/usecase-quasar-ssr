<template>
  <h1>Markdown Page</h1>
  <q-no-ssr>
    <MarkdownInput
      field_label="text"
      initial_content="Initial content"
      :file_upload="() => 0"
    >
    </MarkdownInput>
  </q-no-ssr>
</template>

<script setup lang="ts">
// import MarkdownInput from 'src/components/MarkdownInput.vue';
import { defineAsyncComponent } from 'vue';

const MarkdownInput = defineAsyncComponent(
  () => import('src/components/MarkdownInput.vue')
);
</script>

<style scoped></style>
