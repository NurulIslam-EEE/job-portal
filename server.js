const mongoose = require("mongoose");
const dotenv = require("dotenv").config();



const app = require("./index");

// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{

console.log('Database connection is successful' )
});

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

