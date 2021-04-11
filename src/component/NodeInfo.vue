<template>
  <div class="node-info">
    <Input v-model="nodeName"></Input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nodeName: ''
    }
  },
  watch: {
    nodeName(newName) {
      this.$emit('changeNodeName', newName);
    }
  }
}
</script>
