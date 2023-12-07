import  express  from "express";
import * as authcontroller from "../app/controllers/authcontroller.js";
const router = express.Router();
router.post('/login',authcontroller.login);
router.post('/admin/login',authcontroller.adminLogin);
router.post('/register',authcontroller.register);
export default router;
