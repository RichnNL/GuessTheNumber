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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
