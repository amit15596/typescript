import {Request, Response} from 'express';
import db from "../config/db.config"

const findAll = async(req:Request,res:Response)=> {
    try{
        const sql:any = "select * from users where is_active='1'";
        db.query(sql, (err,result) => {
            if(err) throw err;
            res.json({"status": 200,"response": result});
        });
        // if(!result.length){
        //     res.json({"status":200,"message":"No Record Found"})
        // } else {
        //     res.json({"status":200, "message": result})
        // }
    } catch(err){
        // tslint:disable-next-line:no-console
        console.log(err);
        res.status(500).send(err.message)
    }
}

export default{
    findAll
}