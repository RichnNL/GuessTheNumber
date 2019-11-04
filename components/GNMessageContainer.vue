<template>
 <b-col class="message"> 
   <h1 class="title" v-if="!aPlayerWon" :class="titleClass"> {{ $store.state.gameState.gameMessage}} </h1>
   <transition name="player-won-in">
   <h1 class="title" v-if="aPlayerWon" :class="titleClass"> Congratulations </h1>
   </transition>
 </b-col>
</template>

<script>
export default {
  computed: {
    titleClass: function() {
      return this.$mq + "Title";
    },
    aPlayerWon: function() {
      if(this.$store.state.gameState.gameMessage.includes("Won!")){
        return true;
      }
      else {
        return false;
      }
    },
  }
}
</script>

<style lang="postcss">

.player-won-in-enter-active {
  animation: bounce-in 3s;
}
.player-won-in-leave-active {
  animation: bounce-in 3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    color: black;
  }
  30% {
    color: yellow;
  }
  50% {
    transform: scale(3);
    color: blue;
  }
  80% {
    color: green;
  }
  100% {
    transform: scale(1);
    color: purple;
  }
}
.message {
  margin-top: 2px;
  text-align: center;
  display: inline-block;
}


.desktopTitle {
   font-size: 1.2em !important;
   margin-bottom: 12%;
  }

.mobileTitle {
   font-size: .8em !important;
  }

</style>
