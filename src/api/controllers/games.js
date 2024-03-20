const Game = require('../models/games');

const addGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body);
    const existingGame = await Game.findOne({ title: req.body.title });
    if (existingGame) {
      return res.status(400).json('Existing game');
    }
    const savedGame = await newGame.save();
    return res.status(201).json(savedGame);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const editGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newGame = new Game(req.body);
    newGame._id = id;
    const updatedGame = await Game.findByIdAndUpdate(id, newGame, {
      new: true
    });
    return res.status(200).json({
      message: 'Game data updated',
      juego: updatedGame
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedGame = await Game.findByIdAndDelete(id);
    if (deletedGame) {
      return res
        .status(200)
        .json({ mensaje: 'Game deleted', juego: deletedGame });
    } else {
      return res.status(404).json('Game not found');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getGames = async (req, res, next) => {
  try {
    const allGames = await Game.find().populate('platform');
    if (allGames.length === 0) {
      return res
        .status(204)
        .json('There are no games in the database');
    }
    return res.status(200).json(allGames);
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: 'No results found', error: error });
  }
};

module.exports = { addGame, editGame, deleteGame, getGames };