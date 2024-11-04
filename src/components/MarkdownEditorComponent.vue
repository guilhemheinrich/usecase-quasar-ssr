<template>
  <q-no-ssr>
    <VMarkdownEditor
      v-model="content"
      locale="en"
      :upload-action="file_upload"
    ></VMarkdownEditor>
  </q-no-ssr>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import { VMarkdownEditor } from 'vue3-markdown';

const content = ref('');

defineProps({
  initial_content: {
    type: String as PropType<string>,
    default: '',
  },
  file_upload: {
    type: Function,
  },
});
</script>

<style scoped></style>
