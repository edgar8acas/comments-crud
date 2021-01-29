import { Router } from "express";
import TaskController from "./comment";
const api: Router = Router();

api.use("/comments", TaskController);

export default api;
