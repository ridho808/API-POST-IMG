import express from "express"
import db from "./config/db.js";
import dotenv from 'dotenv';
import router from "./routers/router.js";
dotenv.config()
const app = express();
const port = 4000;

try {
    await db.authenticate()
    console.log("DATABASE connected.....");
} catch (error) {
    console.log('error');
}
app.use(express.json());
app.use(router)
app.listen(port,()=>{
    console.log('connected......');
})