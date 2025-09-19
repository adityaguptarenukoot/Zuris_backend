import { Router } from "express";
import { formSubmit } from "../controllers/form.controller.js";


const formRouter = Router();

formRouter.post("/submit", formSubmit);


export default formRouter;