import express from "express";
import bcrypt from "bcryptjs";
import db from "../db/connection.js";
import jwt from "jsonwebtoken";
import { ObjectId } from 'mongodb';

const router = express.Router();

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json({ message: "Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "your=secret-key");
        req.user = decoded;
        next();
    }catch (error){
        return res.status(403).json({message: "Invalid or expired token"});
    }
};

//Create a new order
router.post("/", authenticateToken, async (req, res) => {
    const { items, shippingAddress, paymentInfo } = req.body;

    if (!items || !items.length || !shippingAddress) {
        return res.status(400).json({ message: "Items and shopping address are required"});
    }

    try{
        const ordersCollection = db.collection("orders");

        const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        const newOrder = {
            userId: new ObjectId(req.user.userId),
            orderDate: new Date(),
            status: "pending",
            items,
            shippingAddress,
            paymentInfo,
            totalAmount
        };

        const result = await ordersCollection.insertOne(newOrder);

        res.status(201).json({
            message: "Order created successfully",
            orderId: result.insertedId
        });
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

//Get all orders for a user
router.get("/", authenticateToken, async (req, res) => {
    try{
        const ordersCollection = db.collection("orders");
        const orders = await ordersCollection
            .find({ userId: new ObjectId(req.user.userId)})
            .toArray();

        res.json(orders);

    }catch (error) {
        console.error(error);
        res.status(500).json ({ message: "Server error"});
    }
});

//Get a specific order by ID
router.get("/:id", authenticateToken, async (req, res) => {
    try{
        const ordersCollection = db.collection("orders");
        const order = await ordersCollection.findOne({
            _id: new ObjectId(req.params.id),
            userId: new ObjectId(req.user.userId)
        });

        if (!order) {
            return res.status(404).json({ message: "Order not found"});
        }

        res.json(order);

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error"});
    }
});

// Update order status
router.patch("/:id/status", authenticateToken, async (req, res) => {
    const { status } = req.body;
    
    if (!status) {
        return res.status(400).json({ message: "Status is required" });
    }
    
    try {
        const ordersCollection = db.collection("orders");
        
        const result = await ordersCollection.updateOne(
            { _id: new ObjectId(req.params.id), userId: new ObjectId(req.user.userId) },
            { $set: { status, updatedAt: new Date() } }
        );
        
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Order not found" });
        }
        
        res.json({ message: "Order status updated successfully" });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;