<template>
  <b-col class="playerMessage">
    {{playerMessage}}
  </b-col>
</template>

<script>

export default {
  props: { playerMessage: {
            type: String,
            required: true
        }
  }
}
</script>

<style>

.playerMessage {
  text-align: center;
  display: inline-block;
  max-width: 12em;
  margin: auto;
}
</style>
