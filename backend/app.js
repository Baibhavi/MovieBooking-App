const express = require ("express");
const mongoose  = require ("mongoose");
const app = express();
const dotenv  = require ('dotenv');


const userRouter  = require ("./routes/userRoutes.js");
const adminRouter  = require  ("./routes/adminRoutes.js");
const movieRouter  = require  ("./routes/movieRoutes.js");
const bookingRouter = require("./routes/bookingRoutes.js");
const cors = require('cors');
app.use(cors());
dotenv.config();
const PORT= process.env.PORT;

const Connection = require('./utils/dbConnect');
Connection();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

//middleware routes
app.use(express.json());
app.use("/user", userRouter); 
app.use("/admin", adminRouter); 
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);

//http://localhost3000/admin/signup
//Body: email+password

mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true, useNewUrlParser: true,}
)
.then(() => 
        console.log("connected successfully")
)
    .catch((e) => console.log(e));

    app.listen(PORT,()=>{
        console.log(`SERVER RUNNING ON ${PORT}`);
    })