const {StatusCodes} = require('http-status-codes');
const {BadRequestError, NotFoundError} = require('../errors');
const Job = require('../models/Job');

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({createdBy: req.user.userId}).sort('createdAt');
  res.status(StatusCodes.OK).json({jobs, counts: jobs.length});
};

const createJob = async (req, res) => {
  const {body, user} = req;
  body.createdBy = user.userId;
  const job = await Job.create(body);
  res.status(StatusCodes.CREATED).json({job});
};

const getJob = async (req, res) => {
  const {
    params: {id},
    user: {userId},
  } = req;
  const job = await Job.findOne({
    _id: id,
    createdBy: userId,
  });
  if (!job) throw new NotFoundError(`No job with this id ${id}`);
  res.status(StatusCodes.OK).json({job});
};

const updateJob = async (req, res) => {
  const {
    params: {id},
    user: {userId},
    body: {company, position},
  } = req;
  if (company === '' || position === '')
    throw new BadRequestError('Company or Position fields cannot be empty');
  const job = await Job.findByIdAndUpdate(
    {
      _id: id,
      createdBy: userId,
    },
    req.body,
    {new: true, runValidators: true}
  );
  if (!job) throw new NotFoundError(`No job with this id ${id}`);
  res.status(StatusCodes.OK).json({job});
};

const deleteJob = async (req, res) => {
  const {
    params: {id},
    user: {userId},
  } = req;
  const job = await Job.findByIdAndRemove({
    _id: id,
    createdBy: userId,
  });
  if (!job) throw new NotFoundError(`No job with this id ${id}`);
  res.status(StatusCodes.OK).json({msg: 'success remove'});
};

module.exports = {getAllJobs, getJob, createJob, updateJob, deleteJob};
