import poolconnectDB from "../../models/connetDB.js";
const pool = poolconnectDB()
 export const product = (req,res)=>{
    const sql = "select * from category_books"
    pool.query(sql,(err,res1) =>{
        if(err){
            res.status(500).json({err:err})    
            return    
        }
        res.status(200).json(res1)
    })
 }

 export const detail = (req,res)=>{
    const isbn = req.params['isbn']
    const sql = `select * from category_books where isbn = '${isbn}'`
    pool.query(sql,(err,res1) =>{
        if(err){
            res.status(500).json({err:err})    
            return    
        }
        res.status(200).json(res1)
    })
 }

 export const search = (req,res)=>{
    const value = req.params['value']
    const sql = `select * from category_books where name LIKE '%${value}%';`;
    pool.query(sql,(err,res1) =>{
        if(err){
            res.status(500).json({err:err})    
            return    
        }
        if(res1.length === 0){
            res.status(404).json({message:'No data result'});
            return
        }
        res.status(200).json(res1)
    })
 }