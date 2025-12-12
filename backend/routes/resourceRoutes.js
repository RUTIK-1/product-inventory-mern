const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); 
const resourceController = require('../controllers/resourceController');

router.post('/', auth, resourceController.createResource);
router.get('/', auth, resourceController.getResources);
router.get('/:id', auth, resourceController.getResource);
router.put('/:id', auth, resourceController.updateResource);
router.delete('/:id', auth, resourceController.deleteResource);

module.exports = router;

