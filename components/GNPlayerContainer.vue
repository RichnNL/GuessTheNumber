<template>
  <b-col sm="12" md="4" lg="4" :class="playerContainerClass" >
    <b-row>
      <GNPlayerMessage v-bind:playerMessage="playerMessage"></GNPlayerMessage>
    </b-row>
    <b-row>
      <GNPlayer v-bind:playerNumber="playerNumber" v-bind:canGuess="playerCanGuess" ></GNPlayer>
    </b-row>
  </b-col>
 
</template>
<script>
import GNPlayer from '~/components/GNPlayer.vue';
import GNPlayerMessage from '~/components/GNPlayerMessage.vue';
export default {
  components: {
    GNPlayer,
    GNPlayerMessage
  },
  props: { playerNumber: {
            type: Number,
            required: true
        }
  },
   computed: {
    playerContainerClass: function() {
      return this.$mq + "PlayerContainer";
    },
    playerMessage: function() {
      if(this.playerNumber == 1) {
        return this.$store.state.gameState.messageForPlayer1;
      } else if(this.playerNumber == 2) {
        return this.$store.state.gameState.messageForPlayer2;
      } else {
        return this.$store.state.gameState.messageForPlayer3;
      }
    },
    playerCanGuess: function() {
       if(this.playerNumber == 1) {
        return this.$store.state.gameState.player1CanGuess;
      } else if(this.playerNumber == 2) {
        return this.$store.state.gameState.player2CanGuess;
      } else {
        return this.$store.state.gameState.player3CanGuess;
      }
    }
  }
}
</script>

<style>


.mobilePlayerContainer {
  padding-top: .5em;
  padding-bottom: .5em;
  }

  .desktopPlayerContainer {
  padding-right: .5em;
  padding-left: 2em;
  }
</style>
