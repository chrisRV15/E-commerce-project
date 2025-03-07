import express from "express";
import cors from "cors";
import products from "./routes/product.js";


const PORT = process.env.PORT || 5050;
const app = express();  

app.use(cors());
app.use(express.json());
app.use("/product", products);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
