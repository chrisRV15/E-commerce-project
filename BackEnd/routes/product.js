import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import e from "express";

const router = express.Router();

//Get a list of all products
router.get ("/", async (req, res) => {
    let collection = await db.collection("products");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

//Get a single product by ID
router.get("/:id", async (req, res) => {
    let collection = await db.collection("products");
    let query = { _id: ObjectId(req.params.id) };
    let results = await collection.findOne(query);

    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});

export default router;