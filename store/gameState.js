export const state = () => ({
  gameMessage: "Players enter a number and make a guess!",
  playersInputCount: 3,
  messageForPlayer1:
    'Enter a number between 0 and 100', 
  messageForPlayer2:
    'Enter a number between 0 and 100',
  messageForPlayer3:
    'Enter a number between 0 and 100', 
  canGuess: [true, true, true],
  player1CanGuess: true,
  player2CanGuess: true,
  player3CanGuess: true,
  player1GuessValue: '',
  player2GuessValue: '',
  player3GuessValue: ''
})

export const mutations = {
  setGuessResult (state, inputData) {
    const guessValue = inputData.guess;
    const playerNumber = inputData.player;
    state.playersInputCount--;
    if(playerNumber == 1) {
      state.player1CanGuess = false;
      state.player1GuessValue = guessValue;
    } else if(playerNumber == 2) {
      state.player2CanGuess = false;
      state.player2GuessValue = guessValue;
    } else {
      state.player3CanGuess = false;
      state.player3GuessValue = guessValue;
    }
     if(state.playersInputCount == 2) {
      state.gameMessage = "Waiting on " + state.playersInputCount + " players";
    } else {
      if(state.player1CanGuess) {
        state.gameMessage = "Waiting on Player 1";
      } else if(state.player2CanGuess) {
        state.gameMessage = "Waiting on Player 2";
      } else {
        state.gameMessage = "Waiting on Player 3";
      }
    }
      
    },
    setPlayerValues(state,  inputData) {
      const message = inputData.message;
      const playerNumber = inputData.player;
      if(message == 'Bingo!!!') {
        state.player1CanGuess = false;
        state.player2CanGuess = false;
        state.player3CanGuess = false;
        state.gameMessage = "Player " + playerNumber + "Won!";
        if(playerNumber == 1) {
          state.messageForPlayer1 = "Winner";
        } else if (playerNumber == 2) {
          state.messageForPlayer2 = "Winner";
        } else {
          state.messageForPlayer3 = "Winner";
        }
      } else {
        if(playerNumber == 1) {
          state.messageForPlayer1 = message;
          state.player1CanGuess = true;
        } else if (playerNumber == 2) {
          state.messageForPlayer2 = message;
          state.player2CanGuess = true;
        } else {
          state.messageForPlayer3 = message;
          state.player3CanGuess = true;
        }
        state.playersInputCount++;
        if(state.playersInputCount == 3) {
          state.gameMessage = "Players Make a new guess";
        }
        
      }
      
      
    }
  }

  export const actions = {
    async submitGuess({commit, state}, inputData) {
      const guess = inputData.guess;
      const player = inputData.player;
      if(state.playersInputCount == 1){
        commit('setGuessResult', {player: player, guess: guess})
       try {
        let params = new URLSearchParams();
        params.append('player', 1)
        params.append('guess', state.player1GuessValue)
        await this.$axios.$get('api/guess/',{
          params: params
        }).then(result => {
          commit('setPlayerValues', {player: 1, message: result.guess})
        })
        params = new URLSearchParams();
        params.append('player', 2);
        params.append('guess', state.player2GuessValue)
        await this.$axios.$get('api/guess/',{
          params: params
        }).then(result => {
          commit('setPlayerValues', {player: 2, message: result.guess})
        })
        params = new URLSearchParams();
        params.append('player', 3);
        params.append('guess', state.player3GuessValue);
        await this.$axios.$get('api/guess/',{
          params: params
        }).then(result => {
          commit('setPlayerValues', {player: 3, message: result.guess})
        })      
       } catch (e) {
         console.log(e);
       }
      } else {
        commit('setGuessResult', {player: player, guess: guess})
      }
    },
  }