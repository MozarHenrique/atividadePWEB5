const foodModel = require('../models/foodModel');

const createFood = async (foodData) => {
   const food = new foodModel(foodData);
   await food.save();
   return food;
};

const getFoodById = async (id) => {
   return await foodModel.findOne({ _id:id });
};

const FindListFood = async () => {
   return await foodModel.find({ });
}

const deleteFoodByid= async (id) => {
   return await foodModel.deleteOne({ _id:id });
}

const updateFood = async (id,foodData) => {
   return await foodModel.findByIdAndUpdate(id,foodData);
}



module.exports = {
    createFood,
    getFoodById,
    FindListFood,
    deleteFoodByid,
    updateFood
};
