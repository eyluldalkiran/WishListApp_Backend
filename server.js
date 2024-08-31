const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();

// Veritabanına Bağlan
connectDB();

// Middleware
app.use(express.json());

// Rotalar
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
const PORT = process.env.PORT || 5001; // Portu 5001 veya başka bir sayıya değiştirin
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
