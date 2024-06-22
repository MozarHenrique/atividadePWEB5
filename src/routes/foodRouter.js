const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');


router.get('/foods', foodController.getListFood);
router.get('/foods/:id', foodController.getFood);
router.post('/foods', foodController.createNewFood);
router.put('/foods/:id', foodController.upFood);
router.delete('/foods/:id', foodController.deleteFood);

module.exports = router;
