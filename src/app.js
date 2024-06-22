const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Conectando ao banco de dados MongoDB
mongoose.connect('mongodb+srv://mozart:zW7SLrqJphH2kCIJ@atividade5.cjrms10.mongodb.net', {
    retryWrites: true,
    w: 'majority',
    appName: 'atividade5'
});
// retryWrites=true&w=majority&appName=atividade5

app.use('/api', foodRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
