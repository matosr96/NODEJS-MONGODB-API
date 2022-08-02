import User from "../models/users.model.js";

export const crearUsuario = async (req, res) => {
  const user = User(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
