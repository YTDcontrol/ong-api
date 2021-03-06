const db = require('../models');

const getById = async (id) => {
  return await db.Organization.findByPk(id);
};

const update = async (id, body) => {
  const data = await db.Organization.update(body, {
    where: { id },
  });
  return data;
};

const getPublicInfo = async (id) => {
  return await db.Organization.findByPk(id, {
    attributes: ["name", "image", "phone", "address", "urlFacebook", "urlInstagram", "urlLinkedin"],
    include: [
      {
        association: 'Slides',
        order: ['order', 'DESC'],
        attributes : ["imageUrl", "text", "order", "organizationId"]
      }
    ]

  });
}

module.exports = {
  getById,
  update,
  getPublicInfo,
};
