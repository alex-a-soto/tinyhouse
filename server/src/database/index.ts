// // imports the MongoClient
// import { MongoClient } from "mongodb";
// // imports the types that will be used by mongo instance
// import { Database, Booking, Listing, User } from "../lib/types";

// // mongourl information processed from .env to respective fields

// // async operation to connect to database and set-ups a promise
// export const connectDatabase = async (): Promise<Database> => {
//     const client = await MongoClient.connect(url, { 
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
    
//     const db = client.db('main');

//     return {
//         bookings: db.collection<Booking>("bookings"),
//         listings: db.collection<Listing>("listings"),
//         users: db.collection<User>("users")
//     };
// };


import { MongoClient } from "mongodb";
import { Database, Booking, Listing, User } from "../lib/types";


const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });
  const db = client.db("main");

  return {
    bookings: db.collection<Booking>("bookings"),
    listings: db.collection<Listing>("listings"),
    users: db.collection<User>("users")
  };
};
