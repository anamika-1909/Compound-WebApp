const router = require('express').Router();
const compoundController = require('../../controllers/compound.controller'); 


router.route('')
  .get(
    compoundController.getAllCompounds
  )
  .post(compoundController.createCompound);


router.route('/:compoundId')
  .get(compoundController.getCompoundById)
  .put(
    compoundController.updateCompound
  )
  .delete(compoundController.deleteCompound);

module.exports = router;