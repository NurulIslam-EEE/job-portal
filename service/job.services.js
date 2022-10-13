const Job = require("../models/Job");
const User = require("../models/User");
const Apply = require("../models/Apply");

exports.createJobService = async (data, email) => {
  const user = await User.findOne({ email });
  data.hiringManager = user._id;
  // console.log('verify user',user);
  const job = await Job.create(data);

  return job;
};

exports.updateJobService = async (id, data) => {
  const job = await Job.updateOne({ _id: id }, data, { runValidators: true });

  return job;
};

exports.getJobService = async (filters) => {
  const job = await Job.find(filters);

  return job;
};

exports.getJobByIdService = async (id) => {
  const job = await Job.findOne({ _id: id }).populate("hiringManager");

  return job;
};

exports.applyJobService = async (data, id,email) => {
  const user = await User.findOne({ email: email });

  data.name = user.firstName+user.lastName;
  const job = await Apply.create(data);
  const result = await Job.updateOne(
    { _id: id },
    { $push: { application: job.id } }
  );
 
  console.log('applied',job);
  return job;
};
