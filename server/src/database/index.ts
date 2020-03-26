// imports the MongoClient
import { MongoClient } from "mongodb";
// imports the types that will be used by mongo instance
import { Database, Booking, Listing, User } from "../lib/types";

// mongourl information processed from .env to respective fields
const url = `mongodb+srv://${process.env.DB_USER}:${
process.env.DB_USER_PASSWORD}
@${process.env.DB_CLUSTER}.mongodb.net
/test?retryWrites=true&w=majority`

// async operation to connect to database and set-ups a promise
export const connectDatabase = async (): Promise<Database> => {
    const client = await MongoClient.connect(url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    const db = client.db('main');

    return {
        listings: db.collection("listings")
        users: db.collection("users")
    };
};

