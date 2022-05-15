let {people} = require('../data');

const getPeople = (req, res) => {
  res.status(200).json({success: true, data: people});
};

const createPerson = (req, res) => {
  const {name} = req.body;
  if (!name) {
    return res.status(400).json({success: false, msg: 'provided name value'});
  }
  res.status(201).json({success: true, data: [...people, name]});
};

const createPersonPostman = (req, res) => {
  const {name} = req.body;
  if (!name) {
    return res.status(400).json({success: false, msg: 'provided name value'});
  }
  res.status(201).json({success: true, person: name});
};

const updatePerson = ({params, body}, res) => {
  const person = people.find((person) => person.id === Number(params.id));
  if (!person) {
    return res
      .status(404)
      .json({success: false, msg: `no person with this id ${params.id}`});
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(params.id)) {
      person.name = body.name;
    }
    return person;
  });
  res.status(200).json({success: true, data: newPeople});
};

const deletePerson = ({params}, res) => {
  const person = people.find((person) => person.id === Number(params.id));
  if (!person) {
    return res
      .status(404)
      .json({success: false, msg: `no person with this id ${params.id}`});
  }
  const newPeople = people.filter((person) => person.id !== Number(params.id));
  res.status(200).json({success: true, data: newPeople});
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
