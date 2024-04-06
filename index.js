const express = require('express');
const cors = require('cors');
const { connection } = require('./config/db');
const { taskRouter } = require('./routes/taskRoutes');
const { userRouter } = require('./routes/userRoutes');





const app = express();




app.use(express.json());
app.use(express.text());
app.use(cors());
app.use('/users', userRouter);
app.use('/tasks', taskRouter);




app.get('/', (req, res) => {
    res.status(200).json({msg: 'Welcome to the Task Management App!'})
})







app.listen(process.env.PORT, async () => {
    try{
        await connection;
        console.log(`connected to the DB`);
        console.log(`Server is running at port ${process.env.PORT}`);
    }
    catch(err){
        console.log(err);
    }
})