const { generateSign } = require('../../utils/jwt');
const User = require('../models/users');
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).json('Username already exists');
    }
    existingUser.role = 'user';
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {

        const token = generateSign(user._id);
        return res.status(200).json({ user, token });
      } else {
        return res.status(400).json('Incorrect username or password');
      }
    } else {
      return res.status(400).json('Incorrect username or password');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const editUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.user.id === id || req.user.role === 'admin') {

      const newUser = new User(req.body);
      newUser._id = id;
      newUser.role = req.user.role;
      const updatedUser = await User.findByIdAndUpdate(id, newUser, {
        new: true
      });
      return res.status(200).json({
        message: 'User updated successfully',
        usuario: updatedUser
      });
    } else {
      return res
        .status(400)
        .json('You are not authorized to make changes');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      return res
        .status(200)
        .json({ mensaje: 'User deleted', usuario: deletedUser });
    } else {
      return res.status(404).json('User not found');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const manageAdmins = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        role: req.body.role
      },
      { new: true }
    );
    return res.status(200).json({
      message: 'User updated successfully',
      usuario: updatedUser
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  register,
  login,
  editUser,
  deleteUser,
  getUsers,
  manageAdmins
};