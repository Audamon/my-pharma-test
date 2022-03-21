import express from "express";
import mongoose from "mongoose";

import router from './routes/personRoutes.js';
import cRouter from "./routes/companyRouter.js";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use('/person', router);
app.use('/company', cRouter);

app.get("/", (req, res) => {
  try {
    res.json({ message: "OI Express!" });
  } catch (error) {}
});

mongoose
  .connect(
    "mongodb+srv://joao:zGCJhZQ4GA8BM9O7@apicluster.op5oc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000);
    console.log("Conectou");
  })
  .catch((err) => {
    console.log(err);
  });

//senha db: zGCJhZQ4GA8BM9O7
//mongodb+srv://joao:zGCJhZQ4GA8BM9O7@apicluster.op5oc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
