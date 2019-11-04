<template>
  <b-container fluid :class="containerClass" class="container h-100">
    <b-row >
      <GNHeader> </GNHeader>
    </b-row>

    <b-row>
      <GNMessageContainer></GNMessageContainer>
    </b-row>
    <b-row >
      <GNPlayerContainer :playerNumber=1 ></GNPlayerContainer>
      <GNPlayerContainer :playerNumber=2></GNPlayerContainer>
      <GNPlayerContainer :playerNumber=3></GNPlayerContainer>
    </b-row>
  </b-container>
</template>

<script>
import GNHeader from '~/components/GNHeader.vue';
import GNMessageContainer from '~/components/GNMessageContainer.vue';
import GNPlayer from '~/components/GNPlayer.vue';
import GNPlayerContainer from '~/components/GNPlayerContainer.vue';
import GNPlayerMessage from '~/components/GNPlayerMessage.vue'

export default {
  components: {
    GNHeader,
    GNMessageContainer,
    GNPlayer,
    GNPlayerContainer,
    GNPlayerMessage
  },
   computed: {
    containerClass: function() {
      return this.$mq + "Container";
    }
  }
}
</script>

<style>
.desktopContainer {
  padding: 5% auto;
}

.mobileContainer {
  padding: 0;
}
</style>
