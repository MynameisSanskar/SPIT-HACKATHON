import  express from "express";
import Cardmodel from '../Model/cardModel.js'
import {getCards,getCard,createCard, deleteCard, updateCard} from '../Controllers/cardController.js'
const router=express.Router()


router.use((req,res,next)=>{
  console.log(req.path,req.method);
  next();
})



// fetch all cards
router.get('/',getCards)

//Get a single card
router.get('/:id',getCard)


// Post A new Card
router.post('/',createCard)

// Delete A new Card
router.delete('/:id',deleteCard)

// Patch A new Card
router.patch('/:id',updateCard)

export default router;