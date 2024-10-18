<template>
  Document Title: {{ challengeText }}
  <!-- No crash with q-no-ssr-->
  <q-no-ssr> again {{ document.title }} </q-no-ssr>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const challengeText = ref('challenge');
//! The next line crash in ssr context,
//! as document is not defined server side
// const staticCallengeText = document.title;
onMounted(() => {
  challengeText.value = 'Rendered ' + document.title; // Works fine
});
</script>

<style scoped></style>
