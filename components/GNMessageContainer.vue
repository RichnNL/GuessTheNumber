<template>
 <b-col class="message"> 
   <h1 class="title"  :class="titleClass"> {{ $store.state.gameState.gameMessage}} </h1>
 </b-col>
</template>

<script>
export default {
  computed: {
    titleClass: function() {
      return this.$mq + "Title";
    }
  }
}
</script>

<style lang="postcss">
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
