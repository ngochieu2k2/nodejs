import poolconnectDB from "../../models/connetDB.js";
const pool = poolconnectDB()
export const detail = (req,res) => {
    const id = req.params['id']
    const sql = `select c.*,u.name from comment c left join users u on c.userid = u.id where c.idBooks = ${id}`
    pool.query(sql,(err,results) => {
        if(err){
            res.status(500).json({status:500,message:'An server error, please try again in 5 minutes'})
            return
        }
        res.status(200).json({status:200,data:results})
    })
}
export const add = (req,res) => {
    const data = req.body
    const idUser = data.iduser;
    const idBooks = data.idbooks;
    const value = data.value;
    const date = new Date().toISOString().split('T')[0]
    const sql = `INSERT INTO comment(userid,idbooks,value,date)VALUES('${idUser}',${idBooks},'${value}','${date}');`;
    pool.query(sql,(err,results) => {
        if(err){
            res.status(500).json({status:500,message:'An server error, please try again in 5 minutes'})
            return
        }
        res.status(201).json({status:201,message:'Add comment is success'})
    })
}