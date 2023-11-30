import express from "express";
import * as productcontroller from "../app/controllers/productcontroler.js"
const router = express.Router()
router.get('/',productcontroller.product)
export default router
