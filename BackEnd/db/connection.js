import { MongoClient, ServerApiVersion } from "mongodb";

const url = process.env.ATLAS_URI || "";
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    //Connect the client to the server
    await client.connect();
    //Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
}
catch (err) {
    console.error(err);
}

let db = client.db("ecommerce");

export default db;