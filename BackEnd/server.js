import express from "express";
import cors from "cors";
import products from "./routes/product.js";
import users from "./routes/user.js";
import orders from "./routes/order.js";


const PORT = process.env.PORT || 5050;
const app = express();  

app.use(cors());
app.use(express.json());
app.use("/product", products);
app.use("/user", users);
app.use("/order", orders);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
