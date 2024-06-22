const foodService = require('../services/foodService');

const createNewFood = async (req, res) => {
    try {
        const food = await foodService.createFood(req.body);
        res.status(201).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getFood = async (req, res) => {
    try {
        const food = await foodService.getFoodById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getListFood = async (req, res) => {
    try {
        const foods = await foodService.FindListFood();
        res.json(foods);
    } catch (error) {
        res.status(500).send(error);
    }
};

const upFood = async (req,res) =>{
    try {
        const foods = await foodService.updateFood(req.params.id,req.body);
        res.json(foods);
    } catch (error) {
        res.status(500).send(error);
    }

}

const deleteFood = async (req, res) => {
    try {
        const food = await foodService.deleteFoodByid(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createNewFood,
    getFood,
    getListFood,
    deleteFood,
    upFood
};
