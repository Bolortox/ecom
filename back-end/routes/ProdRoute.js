import express from "express"
import { createProd, getProd } from "../controllers/ProdController.js"

const prodRouter = express.Router()

prodRouter.post('/prod' , createProd)
prodRouter.get('/prod',  getProd)

export {prodRouter}
