const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const ConnectDB = require("./config/db");
const path = require('path');
// rest object
const app = express();
// mongodb connection
ConnectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use('/api/v1/auth', require("./routes/authRoutes"));
app.use('/api/v1/inventory', require("./routes/inventoryRoutes"));



// Static folder
app.use(express.static(path.join(__dirname, './client/build')));

// Static Routes
app.get(" * ", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port 
const PORT = process.env.PORT || 8080;

// listening port number
app.listen(PORT, () => {
    console.log(`Server is Running on Port ${process.env.PORT}`.bgRed.white
    );
})