const express = require('express');
const router = express.Router();
const sinhvien =  require('../models/sinhvienModel');
router.get('/',async (req,res)=>{
    try{
        const sinhviens =await sinhvien.find();
        res.render('sinhvien',{sinhviens: sinhviens})
    }catch(error){
        console.error(error);
        res.status(500).json({error:'Không kết nối được với server'});
    }
})
router.post('/',async (req,res)=>{
    try {
        const {id,name}=red.body;
        const svien = new sinhvien({id,name});
        await svien.save();
        res.status(201).json(svien)
    } catch (error) {
        console.error(error);
    }
})
router.put('/:_id',async(req,res)=>{
    try {
        const {_id} = req.params;
        const {name,id} =req.body;
        const updateSv = await sinhvien.findByIdAndUpdate(_id ,{id,name},{new:true});
        res.json(updateSv)
    } catch (error) {
        console.error(error);
    }
})
router.delete('/:_id', async (req,res)=>{
    const {_id} =req.params;
    try {
        await sinhvien.findByIdAndDelete(_id)
    } catch (error) {
        console.error(error);
    }
})
module.exports=router;