const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config();
const productRoutes = require('./routes/productRoutes')
const app = express()

app.use(express.json());


const port = process.env.PORT



//connect to database
connectDB();

app.get('/', (req, res) => {
    res.send("Hello! Welcome to our Website");
});
app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`The Product app listening on the port ${port}`);
})