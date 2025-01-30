const express=require('express');
const PORT=7005;

const app=express();
const db=require("./Config/db");
const cors=require('cors');


app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());

app.use(express.urlencoded());


app.use(require("./Routes/index"));

app.use('/uploads', express.static('uploads'));


app.listen(PORT,console.log(`Server Started on port ${PORT}`));
