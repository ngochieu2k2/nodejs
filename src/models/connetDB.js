import mysql from 'mysql2';
const poolconnectDB = () =>{
    let pool = mysql.createPool({
        connectionLimit : 10,
        host :"localhost",
        user : "root",
        password: "",
        database : "sach"
    })
    return pool
}
export default poolconnectDB;