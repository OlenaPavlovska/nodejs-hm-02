import logger from "morgan";
import cors from "cors";

import router from "./routes/api/contacts.js";
import express from "express";
import {
  handleNotFound,
  handleBadRequest,
  handleInternalServerError,
} from "./middleware/errorHandler.js";
import authRouter from "./routes/api/auth-router.js";


const app = express();



const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/contacts", router);

app.use(handleNotFound);
app.use(handleBadRequest);
app.use(handleInternalServerError);

export default app;
