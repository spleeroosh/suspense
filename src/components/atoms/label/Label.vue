<script setup lang="ts">

const msg: string = 'THIS IS LABEL';

</script>

<template>
  <label :class="$style.root">{{msg}}</label>
</template>

<style module>
.root {
  color: gray
}
</style>
