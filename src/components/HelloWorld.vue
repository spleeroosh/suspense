<script setup lang="ts">
import {ref} from 'vue';

const msg: string = 'Hello Vue 3 + TypeScript + Vite';

const count = ref<number>(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      :class="$style.link"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      :class="$style.link"
      target="_blank"
    >Volar</a>
  </p>

  <p>
    See
    <code :class="$style.code">README.md</code> for more information.
  </p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      :class="$style.link"
      target="_blank"
    >Vite Docs</a>
    |
    <a
      href="https://v3.vuejs.org/"
      :class="$style.link"
      target="_blank"
    >Vue 3 Docs</a>
  </p>

  <button
    type="button"
    @click="count++"
  >count is: {{ count }}</button>
  <p>
    Edit
    <code :class="$style.code">components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<style module>
.link {
  color: #42b983;
}

.label {
  margin: 0 0.5em;
  font-weight: bold;
}

.code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
