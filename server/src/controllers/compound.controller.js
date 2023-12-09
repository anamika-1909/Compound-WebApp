const { NotFoundError } = require('../errors');
const compoundService = require('../services/compound.service');
const { getPaginatedResponse } = require('../utils/pagination.utils');

async function getAllCompounds(req, res) {
  try {
    let {page, limit} = req.query;
    page = parseInt(page);
    limit=parseInt(limit);
    const paginatedData = await compoundService.getAllCompounds(
      { offset: (page - 1) * limit, limit }
    );
    const responseData = getPaginatedResponse(paginatedData, limit);
    res.json(responseData);
  } catch (err) {
    if(err instanceof NotFoundError)
    res.status(404).json({msg:"Not found!"});
    res.status(500).json({msg:"Something went wrong!"});
  }
}

async function createCompound(req, res) {
  try {
    const {compoundName, compoundDescription, compoundImageUrl} = req.body;
    const compound = await compoundService.createCompound(compoundName, compoundDescription, compoundImageUrl);
    res.status(201).json(compound);
  } catch (err) {
    if(err instanceof NotFoundError)
    res.status(404).json({msg:"Not found!"});
    res.status(500).json({msg:"Something went wrong!"});
  }
}

async function getCompoundById(req, res) {
  try {
    const {compoundId} = req.params;
    const compound = await compoundService.getCompoundById(compoundId);
    res.json(compound);
  } catch (err) {
    if(err instanceof NotFoundError)
    res.status(404).json({msg:"Not found!"});
    res.status(500).json({msg:"Something went wrong!"});
  }
}

async function updateCompound(req, res) {
  try {
    const {compoundId} = req.params;
    const {compoundName, compoundDescription, compoundImageUrl} = req.body;
    const compound = await compoundService.updateCompound(compoundId, compoundName, compoundDescription, compoundImageUrl);
    res.json(compound);
  } catch (err) {
    if(err instanceof NotFoundError)
    res.status(404).json({msg:"Not found!"});
    res.status(500).json({msg:"Something went wrong!"});
  }
}

async function deleteCompound(req, res) {
  try {
    const {compoundId} = req.params;
    await compoundService.deleteCompound(compoundId);
    res.sendStatus(204);
  } catch (err) {
    if(err instanceof NotFoundError)
    res.status(404).json({msg:"Not found!"});
    res.status(500).json({msg:"Something went wrong!"});
  }
}

module.exports = {
  getAllCompounds,
  createCompound,
  getCompoundById,
  updateCompound,
  deleteCompound
};