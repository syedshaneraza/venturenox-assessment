const { default: knex } = require("knex");

const createTenant = async (req, res) => {
  try {
      const tenant = await knex('tenant_profile').insert({data: req.body});
      res.status(201).send({tenant});
  }
  catch(error) {
      res.status(500).send(error.message);
  }
};

const findUniqueTenant = async (req, res) => {
  try {
      const tenant = await knex('tenant_profile').where({id: req.params.id});
      res.status(201).send({tenant});
  }
  catch(error) {
      res.status(500).send(error.message);
  }
};

const getTenant = async (req, res) => {
  try {
      const tenants = await knex.select().table('tenant_profile');
      res.status(201).send({tenants});
  }
  catch(error) {
      res.status(500).send(error.message);
  }
};

const updateTenant = async (req, res) => {
  try {
      const tenant = knex('tenant_profile').where({id: req.params.id}).update({data : req.body});
      res.status(201).send({tenant});
  }
  catch(error) {
      res.status(500).send(error.message);
  }
};

const deleteTenant = async (req, res) =>{
  try {
      const deletedtenant = knex('tenant_profile').where({id: req.params}).del();
      res.status(201).send({deletedtenant})
  } 
  catch(error) {
      res.status(500).send(error.message);
  }
};

module.exports = {
  createTenant,
  findUniqueTenant,
  getTenant,
  updateTenant,
  deleteTenant
}
