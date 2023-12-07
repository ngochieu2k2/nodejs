import poolconnectDB from "../../models/connetDB.js";
const pool = poolconnectDB()
export const register = (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = `select * from users where email = '${username}'`;
    const insertData = `INSERT INTO users(name,password,email,phone,role)VALUES('','${password}','${username}',0,3)`
    pool.query(sql,(err,results) => {
        if (err) {
            res.status(500).json({
                status: 500,
                message: "A server error occurred. Please try again in 5 minutes."
            })
            return
        }
        if (results.length !== 0) {
            res.status(401).json({ status: 401, message: "Email is already taken" })
            return
        }
        pool.query(insertData,(err1,res1) => {
            if (err1) {
                res.status(500).json({
                    status: 500,
                    message: "A server error occurred. Please try again in 5 minutes."
                })
                return
            }
            res.status(201).json({status:201,message:"Create account success"})
        })
    })
}

export const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = `select * from users where email = '${username}' and password = '${password}'`;
    pool.query(sql,(err,results) => {
        if (err) {
            res.status(500).json({
                status: 500,
                message: "A server error occurred. Please try again in 5 minutes."
            })
            return
        }
        if (results.length === 0) {
            res.status(401).json({ status: 401, message: "Username or password incorrect" })
            return
        }
        const id = results.map(e => e.id)
        res.status(200).json({status:200,id:id})
    })
}

export const adminLogin = (req,res) => {
    const data = req.body;
    const username = data.username;
    const password = data.password;
    const sql = `select * from users where email = '${username}' and password = '${password}' and role !=3`;
    pool.query(sql,(err,results) => {
        if (err) {
            res.status(500).json({
                err:err,
                status: 500,
                message: "A server error occurred. Please try again in 5 minutes."
            })
            return
        }
        if (results.length === 0) {
            res.status(401).json({ status: 401, message: "Username or password incorrect" })
            return
        }
        const id = results.map(e => e.id)
        res.status(200).json({status:200,id:id})
    })

}