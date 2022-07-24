const { default: knex } = require("knex");

const createUser = async (req, res) => {
    try {
        const user = await knex('user_profile').insert({data: req.body});
        res.status(201).send({user});
    }
    catch(error) {
        res.status(500).send(error.message);
    }
};

const findUniqueUser = async (req, res) => {
    try {
        const user = await knex('user_profile').where({id: req.params.id});
        res.status(201).send({user});
    }
    catch(error) {
        res.status(500).send(error.message);
    }
};

const getMultipleUsers = async (req, res) => {
    try {
        const users = await knex.select().table('user_profile');
        res.status(201).send({users});
    }
    catch(error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = knex('user_profile').where({id: req.params.id}).update({data : req.body});
        res.status(201).send({user});
    }
    catch(error) {
        res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) =>{
    try {
        const deletedUser = knex('tenant_profile').where({id: req.params}).del();
        res.status(201).send({deletedUser})
    } 
    catch(error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
  createUser,
  findUniqueUser,
  getMultipleUsers,
  updateUser,
  deleteUser
}
