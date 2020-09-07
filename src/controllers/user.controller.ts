import {Request, Response} from 'express';
import userModel from '../models/user.model';
import { request } from 'http';

const getAllUser= async (req:Request ,res:Response) => {
    try {
        userModel.findAll(req,res);
    } catch(error) {
        // tslint:disable-next-line:no-console
        console.log(error);
        res.status(400).send(error.message)
    }
}

export default{
    getAllUser
}
