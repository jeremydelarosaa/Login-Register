import { Connect, DB } from "./utils/connect.js";
import Express from "express";
import cors from "cors";
const connect = new Connect();
const PORT = process.env.PORT || 3001;
const app = Express();
app.use(cors());
app.use(Express.json());

connect.on("connectionOK", () => {
  app.listen(PORT, () => {
    console.log("server is running");
  });
});
connect.get();

app.post("/setUser", async (req, res) => {
  const { nome, email, password, privacy } = req.body.dati;

  const Verify = await DB.User.findOne({ email });
  if (Verify) {
    res.json("Email già esistente");
  } else {
    DB.User.insertOne({
      nome: nome,
      email: email,
      password: password,
      policy: privacy,
    });
  }
});

app.post("/getUser", async (req, res) => {
  const { email, password } = req.body.dati;
  const userCursor = await DB.User.findOne({
    email,
    password,
  });
  if (userCursor) {
    res.json(true);
  } else {
    res.json(false);
  }
});
