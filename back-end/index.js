import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { prodRouter } from "./routes/ProdRoute.js";
import {v2 as cloudinary} from "cloudinary"

mongoose.connect(
  "mongodb+srv://bolortogosboujee:YKQJCyO8XUM1rnmN@bolortox.i93uz.mongodb.net/test"
);
const PORT = 8080;
const server = express();

server.use(cors());
server.use("/api", prodRouter);

server.post('/image-upload' , async (req, res) => {
  try{
    cloudinary.config({
      cloud_name: "dkm8vqcln",
      api_key: "732123544146498",
      api_secret: "WAudMdrXI8d-3oJ2FdWsICU-0MI",

    })
    const uploadResult = await cloudinary.uploader.upload("./assets/totebag.png")
    console.log(uploadResult)
  }catch(error) {
    console.log("cloudinary error" , error)
  }
})

server.listen(PORT, () => {
  console.log(`server is working http://localhost:${PORT}`);
});
