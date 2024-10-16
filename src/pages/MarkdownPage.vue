<template>
  <h1>Markdown Page</h1>

  <MarkdownInput
    field_label="text"
    initial_content="Initial content"
    :file_upload="() => 0"
  >
  </MarkdownInput>
</template>

<script setup lang="ts">
import MarkdownInput from 'src/components/MarkdownInput.vue';
</script>

<style scoped></style>
