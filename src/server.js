const express=require('express');
const {ApolloServer} = require('apollo-server-express')
const cors = require('cors');
const schema = require('./schema')
const mongoose=require('mongoose')
const app=express();
const {server}=require('./config')
const {database}=require('./config')
app.use(cors());
const apolloServer=new ApolloServer({
    schema,
    formatError:(err)=>{
        return err.message
    }
})
apolloServer.applyMiddleware({app});

mongoose.connect(
database.url
).then(
    result=>{app.listen(server.port,()=>{
        console.log(`listening at port ${server.port}`);
    }
    )}
).catch(err=>{
    console.log(err)
})