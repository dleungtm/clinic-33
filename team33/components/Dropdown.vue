<template>
  <select v-model="selectedOption">
    <option v-for="option in options" :value="option.value">
    {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: Array,
    selectedOption: Object
  }
}
</script>

<<style lang="stylus" scoped>
</style>

