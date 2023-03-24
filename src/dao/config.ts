import mongoose from "mongoose";

const URI =
  "mongodb+srv://Adro:Hamuddi5973@cluster0.0gus8k2.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
mongoose
  .connect(URI)
  .then(() => console.log("Conectado a Mongo"))
  .catch((err) => console.log(err.reason));
