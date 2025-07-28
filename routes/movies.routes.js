import express from "express";
import {
  MovieCreate,
  MovieDelete,
  MovieIndex,
  MovieUpdate,
} from "../controllers/movies.controller";

const router = express.Router();

//C - For creating
router.post("/", MovieCreate);

//R - For Reading
router.get("/", MovieIndex);

//U - For Updating
router.put("/:id", MovieUpdate);

//D - For Deleting
router.delete("/:id", MovieDelete);

export default router;
