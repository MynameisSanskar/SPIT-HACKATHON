import mongoose from 'mongoose';
import Cardmodel from '../Model/cardModel.js';



// get all Cards
const getCards=async(req,res)=>{
    const Cards=await Cardmodel.find({}).limit(12)
    res.status(200).json(Cards)
}

// get a Card
const getCard=async(req,res)=>{
    const {id}=req.params
    const Card=await Cardmodel.findById(id)
    console.log(Card);
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error:"No Such Card Exists"})
        
    }
    return res.status(200).json(Card)
}

// Create a Card
const createCard=async (req,res)=>{
    const { id,name, img, location,area,star,tag,price}=req.body;
    try {
        const card=await Cardmodel.create({ id,name, img, location,area,star,tag,price})
        res.json(card).status(200)
    } catch (error) {
        res.status(400).json({error:error.mesage})
    }
    res.json({mssg:"Post a New Card"})
}
// Delete a Card
const deleteCard=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No Such Card Exists"})
    }
    const Card=await Cardmodel.findOneAndDelete({_id:id})
    if(!Card){
        return res.status(404).json({error:"No such Cards exists"})
    }
    res.status(200).json(Card);
    console.log("Request for delete");
}

// Update a Card

const updateCard=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No Such Card Exists"})
    }
    const Card=await Cardmodel.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!Card){
        return res.status(404).json({error:"No such Cards exists"})
    }
    res.status(200).json(Card);
}

export  {getCard,getCards,createCard,deleteCard,updateCard};