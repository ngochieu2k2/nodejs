import express from "express";
import * as viewProductController from "../app/controllers/viewproductcontroller.js";
const viewProductRouter = express.Router()
viewProductRouter.get('/',viewProductController.product);
viewProductRouter.get('/detail/:isbn',viewProductController.detail );
export default viewProductRouter;
