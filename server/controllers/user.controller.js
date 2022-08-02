import User from "../models/users.model.js";

export const createUser = async (req, res) => {
  try {
    const user = User(req.body);
    user.save().then((data) => res.json(data));
  } catch (error) {
    res.json({ message: error });
  }
};

export const getUsers = (req, res) => {
  try {
    User.find().then((data) => res.json(data));
  } catch (error) {
    res.json({ message: error });
  }
};

export const getUser = (req, res) => {
  const { id } = req.params;
  try {
    User.findById(id).then((data) => res.json(data));
  } catch (error) {
    res.json({ message: error });
  }
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, email, password } = req.body;
  try {
    User.updateOne({ _id: id }, { $set: { name, age, email, password } }).then(
      (data) => res.json(data)
    );
  } catch (error) {
    res.json({ message: error });
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  try {
    User.remove({ _id: id }).then((data) => res.json(data));
  } catch (error) {
    res.json({ message: error });
  }
};
