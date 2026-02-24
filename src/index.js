import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js"



dotenv.config(); // load env vars

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json()); // If request contains JSON, parse it automatically
app.use(cors()); // enables cross origin resource sharing

// Routes
app.use("/api", userRoutes);

// Error handling
app.use(errorHandling);


//Testing
app.get("/", async(req, res) =>{
    const result = await pool.query("SELECT current_database()");
    res.send(`The databse name is: ${result.rows[0].current_database}`);
});

// Server running: start listening to http requests on the port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
