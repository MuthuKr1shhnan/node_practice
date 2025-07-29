import Movie from "../models/movie.model.js";
//Creating controller to manage file structure and better readablity
export const MovieCreate = async (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
export const MovieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const MovieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    movie
      ? res.json(movie)
      : res.status(404).json({ message: "cannot find movie" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const MovieUpdate = async (req, res) => {
  try {
    const result = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, desc: req.body.desc },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const MovieDelete = async (req, res) => {
  const movieId = req.params.id;

  try {
    await Movie.deleteOne({ _id: movieId });
    res.json({ message: "Movie deleted.." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
