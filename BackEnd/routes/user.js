import express from "express";
import bcrypt from "bcryptjs";
import db from "../db/connection.js";
import jwt from "jsonwebtoken";
import { ObjectId } from 'mongodb';



const router = express.Router();

router.post("/register", async  (req,res) =>{
    const {firstName, lastName, email, password} = req.body;

    if(!firstName|| !lastName || !email || !password){
        return res.status(400).json({ message: "All fields are required"});
    }

    try {
        const collection = db.collection("users");

        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            createdAt: new Date(),
        };

        await collection.insertOne(newUser);
        res.status(201).json({ message: "User registered successfully"});
    }catch (error){
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
});



router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password){
        return res.status(400).json({ message: "Email and password are required"});
    }

    try{
        const collection = db.collection("users");

        const user = await collection.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({ message: "Invalid credentials "});
        }

        
        const token = jwt.sign(
            { userId: user._id }, 
            process.env.JWT_SECRET || "your-secret-key",  
            { expiresIn: "24h" }  
        );
       
        res.json({ 
            message: "Login successful", 
            token, 
            user: { 
                firstName: user.firstName, 
                lastName: user.lastName, 
                email: user.email 
            } 
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
};

router.get("/me", authenticateToken, async (req, res) => {
    try {
      const collection = db.collection("users");
      const user = await collection.findOne({ _id: new ObjectId(req.user.userId) });
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.json({ 
        firstName: user.firstName, 
        lastName: user.lastName, 
        email: user.email 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

export default router;