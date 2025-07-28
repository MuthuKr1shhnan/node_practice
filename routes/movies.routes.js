import express from 'express'

const router = express.Router()

//CRUD Operation
//C - For creating
router.post('/', (req, res)=>{res.send("Create movie list from moives")})

//R - For Reading
router.get('/', (req, res)=>{res.send("Read movie list")})

//U - For Updating
router.put('/:id', (req, res)=>{res.send("Read movie list!")})

//D - For Deleting
router.delete('/:id', (req, res)=>{res.send("Read movie list")})

export default router