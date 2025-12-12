const Resource = require('../models/Resource');

exports.createResource = async (req, res) => {
  try {
    const resource = await Resource.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getResources = async (req, res) => {
  const resources = await Resource.find({ createdBy: req.user.id, deletedAt: null });
  res.json(resources);
};

exports.getResource = async (req, res) => {
  const resource = await Resource.findById(req.params.id);
  res.json(resource);
};

exports.updateResource = async (req, res) => {
  const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(resource);
};

exports.deleteResource = async (req, res) => {
  const resource = await Resource.findByIdAndUpdate(req.params.id, { deletedAt: new Date() });
  res.json({ message: "Deleted" });
};
