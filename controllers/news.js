const newsService = require('../services/news');
const paginationParams = require("../modules/paginationParams")

const create = async (req, res, next) => {
  try {
    image = req.files.image;
    fields = req.body;
    const newNovelty = await newsService.create(image, fields);
    res.status(201).json({msg: "Novelty created successfully", data: newNovelty});
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const id = req.params.id;
    await newsService.remove(id);
    res.status(200).json({ msg: `News ${id} removed succesfully` });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const novelty = await newsService.getById(id);
    res.status(200).json({data: novelty});
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const updatedNovelty = await newsService.update(req.params.id,req.body);
    res.status(200).json({msg: "Novelty updated successfully", data: updatedNovelty});
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const params = paginationParams.generate(req)
    const news = await newsService.getAll(params);
    res.status(200).json({data: news});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  remove,
  update,
  getById,
  getAll,
};
