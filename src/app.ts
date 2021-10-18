import "reflect-metadata";
import express, { ErrorRequestHandler } from 'express' 
import initConn from './ormconfig/connection';
import userRouter from './router/user'
const app = express()
app.use(express.json())
app.set('port', process.env.PORT || 3007)


app.use('/',userRouter)




// run typeorm 
initConn()

app.use((req,res,next)=>{
    const error = new Error('not valid uri')
    next(error)
})

const errorHandler: ErrorRequestHandler = (err,req,res,next) => {
    console.log(err)
};

app.use(errorHandler)


app.listen(app.get('port'),()=> {
    console.log(`server start at port ${app.get('port')}`)
})

