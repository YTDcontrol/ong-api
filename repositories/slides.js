const db = require('../models');

const create = async (slide) => {
  const data = await db.Slides.create(slide);
  return data
}

const getById = async (id) => {
  return await db.Slides.findByPk(id, {
    attributes: ['imageUrl', 'text', 'order', 'organizationId']
  })
}

const getMaxOrder = async () => {
  return await db.Slides.max('order')

}

const getAll = async () => {
  return await db.Slides.findAll({
    attributes: ['imageUrl', 'text', 'order', 'organizationId']
  })
  
}

const update = async (slide, id) => {
  return await db.Slides.update(slide , {
    where : { id }
  })
}

const remove = async (id) => {
  const data = await db.Slides.destroy({
    where: { id }
  });
  return data;
};

module.exports = {
  create,
  update,
  getMaxOrder,
  getAll,
  getById,
  remove
};
