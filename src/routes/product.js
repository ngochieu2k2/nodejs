import express from "express";
import * as productcontroller from "../app/controllers/productcontroler.js"
const router = express.Router()
router.get('/',productcontroller.product)
router.get('/detail/:isbn',productcontroller.detail )
router.post('/search/:value',productcontroller.search)
export default router
