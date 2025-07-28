//Creating controller to manage file structure and better readablity
export const MovieCreate = (req, res) => {
  res.send({ msg: "create movie" });
};
export const MovieIndex = (req, res) => {
  res.send({ msg: "let to read movie" });
};

export const MovieUpdate = (req, res) => {
  res.send({ msg: "let to update movie" });
};
export const MovieDelete = (req, res) => {
  res.send({ msg: "delete movie" });
};
