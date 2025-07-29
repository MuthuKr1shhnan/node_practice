//Creating controller to manage file structure and better readablity
export const MovieCreate = (req, res) => {
 console.log(req.body)
 return res.json(req.body)
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
