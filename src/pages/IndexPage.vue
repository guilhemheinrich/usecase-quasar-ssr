<template>
  <q-page class="row items-center justify-evenly">
    <div class="flew row">
      <example-component
        title="Example component"
        active
        :todos="todos"
        :meta="meta"
      ></example-component>

      <q-btn to="/normal"> On normal Page </q-btn>
      <q-btn to="/markdown"> On markdown Page </q-btn>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';

defineOptions({
  name: 'IndexPage',
});

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);

const meta = ref<Meta>({
  totalCount: 1200,
});
</script>
