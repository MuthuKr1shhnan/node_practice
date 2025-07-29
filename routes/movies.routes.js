import express from "express";
import {
  MovieCreate,
  MovieDelete,
  MovieDetail,
  MovieIndex,
  MovieUpdate,
} from "../controllers/movies.controller.js";

const router = express.Router();

//C - For creating
router.post("/", MovieCreate);

//R - For Reading
router.get("/", MovieIndex);
//For getting particular id
router.get("/:id", MovieDetail);

//U - For Updating
router.put("/:id", MovieUpdate);

//D - For Deleting
router.delete("/:id", MovieDelete);

export default router;
