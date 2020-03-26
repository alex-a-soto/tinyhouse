// the types for mongodb
import { Collection, ObjectID, ObjectId } from "mongodb";

export interface Booking   {
    _id: ObjectID;
}

export interface Listing {
    _id: ObjectID;
}

export interface User {
    _id: ObjectId;
}

export interface Database {
    bookings: Collection<Booking>;
    listings: Collection<Listing>;
    users: Collection<User>;
}
