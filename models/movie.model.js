import { Schema, model } from "mongoose";

//creating schema
const schema = new Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
});

//creating model schema
const Movie = model("Movie", schema);

export default Movie;
