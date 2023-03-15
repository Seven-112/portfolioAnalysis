import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import analysisRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(analysisRoutes);

// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const url: string = "mongodb://127.0.0.1:27017/shine";
const options: object = { useNewUrlParser: true, useUnifiedTopology: true };
// mongoose.set("useFindAndModify", false);

mongoose
  .connect(url, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Server running on http://localhost:${PORT} \n Database connected: mongodb://127.0.0.1:27017/shine`
      )
    )
  )
  .catch((error) => {
    throw error;
  });
