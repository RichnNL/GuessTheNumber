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
  player3CanGuess: true
})

export const mutations = {
  submitGuess (state, playerNumber, guessValue) {
    state.playersInputCount--;
    if(playerNumber == 1) {
      state.player1CanGuess = false;
    } else if(playerNumber == 2) {
      state.player2CanGuess = false;
    } else {
      state.player3CanGuess = false;
    }
    if(state.playersInputCount == 0){
      state.player1CanGuess = true;
      state.player2CanGuess = true;
      state.player3CanGuess = true;
      state.playersInputCount = 3
      state.gameMessage = "Players Make a new guess";
    } else if(state.playersInputCount == 2) {
      state.gameMessage = "Waiting on " + state.playersInput + " players";
    } else {
      if(state.player1CanGuess) {
        state.gameMessage = "Waiting on Player 1";
      } else if(state.player2CanGuess) {
        state.gameMessage = "Waiting on Player 2";
      } else {
        state.gameMessage = "Waiting on Player 3";
      }
    }
      
    }
  }