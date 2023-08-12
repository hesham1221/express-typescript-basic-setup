import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Setup .env variables for app usage
dotenv.config();
const PORT = process.env.PORT || 5000;

// Init express app
const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Listen to specified port in .env or default 5000
app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
});
