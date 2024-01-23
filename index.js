const express = require("express");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
dotenv.config();
const connectDb = require("./config/db");

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://genie-bazaar-frontend.vercel.app"],
  })
);
connectDb();

const visitor = require("./routes/visitorRoutes");

app.use("/api/v1", visitor);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
