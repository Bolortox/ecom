import { Product } from "../models/ProdModel.js"

const createProd = async (req, res ) => {
  const result = await Product.create({
    name: "Light Tote Bag",
    
    imageUrl: 'http://res.cloudinary.com/dkm8vqcln/image/upload/v1737730188/cr1qf5aitkstvblwgosx.png',
    price: "99000"
  })
  res.json({
    success: true,
    data: result
  })

}
const getProd = async (req, res ) => {
  const result =  await Product.find()
  res.json({
    success: true, 
    data: result
  })
}
 export {getProd, createProd}