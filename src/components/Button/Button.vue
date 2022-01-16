<script setup lang="ts">
import {ButtonType} from '../../types/components/Button';

const props = defineProps<{
  text: string
  type: ButtonType
}>();
console.log(props);

</script>

<template>
  <button :class="$style[type]">{{text}}</button>
</template>

<style module>
.root {
  height: 38px;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  transition: all .2s;
}

.primary {
  color: white;
  background-color: blue;
}

.secondary {
  color: white;
  background-color: purple;
}

.warning {
  color: white;
  background-color: orangered;
}

.ghost {
  color: black;
  border: 1px solid black;
  background-color: transparent;
}

.primary:hover,
.secondary:hover,
.warning:hover {
  opacity: 0.8;
  border: 2px solid silver;
}

.ghost:hover {
  background-color: silver;
}
</style>
