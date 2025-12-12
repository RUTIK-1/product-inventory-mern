const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const exroutes = require("./routes/exroutes");
const authRoutes = require("./routes/authRoutes");
const resourceRoutes = require('./routes/resourceRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("API is running...");
});

app.use("/api/users",authRoutes);
app.use("/api/product",exroutes);
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);



app.listen(5000, () => console.log("Server running on port 5000"));
