// Setups our queries and mutations,
import { ObjectID } from "mongodb";
import { IResolvers } from "apollo-server-express";
import { Database, Listing } from "../../../lib/types";

// queries are returned from the listings.ts as a list
export const listingResolvers: IResolvers = {
    Query: {
        listings: async (_root: undefined, _args: {}, { db }: { db: Database }
            ): Promise<Listing[]> => {
            return await db.listings.find({}).toArray();
        }
    },

// a mutation for deleting a listing using a for loop that matches for id
Mutation: {
    deleteListing: async (
        _root: undefined, 
        { id }: { id: string }, 
        { db }: { db: Database }
        ): Promise<Listing> => {
        const deleteRes = await db.listings.findOneAndDelete({
            _id: new ObjectID(id)
        });
        if (!deleteRes.value) {
            throw new Error('failed to delete listing');
        }
        
        return deleteRes.value;
    }
    },
    Listing: {
        id: (listing: Listing): string => listing._id.toString()
    }

};
