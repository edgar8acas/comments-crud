import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import router from "./controllers";
// Load environment variables
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

(async function setup() {
  const connection = await createConnection();
})();

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
