import connectDB from "./src/config/db.js";
import app from "./src/config/express.js";
import dotenv from "dotenv";

dotenv.config();

//Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running`);
});
