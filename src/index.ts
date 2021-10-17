import { User } from './entity/user';
import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express'
import config from './ormconfig';

createConnection(config).then(async connection => {

    const app = express();
    app.get('/',async (req,res)=>{
        const user = new User()
        user.age = 25;
        user.firstName ='jemin';
        user.lastName = 'seo'
      const user1 = await connection.getRepository(User).save(user);
      res.json(user1)
    })
    


    app.listen(8002,()=>{console.log('server start!!')})
}).catch(error => console.log(error));
