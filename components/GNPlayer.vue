<template>
  <b-col> 
    <b-row>
      <b-col>
         <b-form-input id="input-live" aria-describedby="input-live-feedback"
          v-model="typedInput"
          :state="inputValid"
           trim
           type="text"></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            Invalid Number
          </b-form-invalid-feedback>
      </b-col>
    </b-row>    
    
    <b-row>
      <b-col>
       <b-button @click="$store.commit('gameState/submitGuess', playerNumber,typedInput)" :disabled="canSubmit" id="btn" variant="success">Submit</b-button>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>

export default {
  props: { playerNumber: {
            type: Number,
            required: true
        },
        canGuess: {
          type: Boolean,
          required: true
        }
  },
  data() {
      return {
        typedInput: '',
      }
    },
   computed: {
      inputValid() {
        if(this.typedInput == 0 || this.typedInput == '') {
          return true;
        } else if(parseInt(this.typedInput) && this.typedInput <= 100 && this.typedInput >= 0) {
          return true;
         }
          else {
          return false;
        }
      },
      canSubmit() {
        if(this.canGuess && this.inputValid && this.typedInput.length != '') {
          return false;
        } else {
          return true;
        }
      }
    }
}
</script>

<style>
#input-live {
  max-width: 8em;
  margin: 0 auto;
}

#input-live-feedback {
  text-align: center;
}

#btn {
  max-width: 6em;
  margin: 0 auto;
  margin-top: .4em;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
