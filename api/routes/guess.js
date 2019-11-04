
const { Router } = require('express')

const router = Router()



router.get('/guess', async function (req, res, next) {
  try {
    
    const {player, guess} = req.query;
    if(!guess || !player){
      res.sendStatus(404)
      return;
    }
    if(guess == 70) {
      res.cookie('answer', '');
        res.json( { guess: 'Bingo!!!' });
    } else if (guess < 70) {
        res.json( { guess: 'lower' });
    } else {
        res.json( { guess: 'higher' });
    }
  } catch(err) {
    res.sendStatus(404)
    return;
  };
})



module.exports = router