// dotenv is used to process our environment variables, database information
require('dotenv').config();

// imports the express web framework, building web applications and apis
import express, { Application } from 'express';
// imports apollo server, a graphql compliant server
import {ApolloServer} from 'apollo-server-express';
// document oriented database program, a nosql db 
// imports connectDatabase and connects to our MongoDB atlas instance
import {connectDatabase} from './database'
// data query and manipulation language for apis
// imports typeDefs and resolvers from ./graphql
import { typeDefs, resolvers } from "./graphql";

import cookieParser from "cookie-parser";

// sets app to express()
const app = express();

// mounts the application
const mount = async (app: Application) => {
// sets up db to connect to the database
const db = await connectDatabase();

app.use(cookieParser(process.env.SECRET));

// sets up apolloserver to use typedefs, resolvers and context
const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ db, req, res })
 });

 //  Setups express as the middleware at the /api path
server.applyMiddleware({app, path: "/api"});

// app will listen at the specified port processed from .env
app.listen(process.env.PORT);

// prints out server address
console.log(`[app]: http://localhost:${process.env.PORT}`);

// const listings = await db.listings.find({}).toArray();
// console.log(listings);

};

mount (express());
