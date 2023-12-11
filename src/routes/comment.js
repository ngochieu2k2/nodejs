import  express  from "express";
import * as commentcontroller from "../app/controllers/commentcontroller.js";
const router = express.Router();
router.get('/detail/:id',commentcontroller.detail);
router.post('/add',commentcontroller.add);
export default router;
