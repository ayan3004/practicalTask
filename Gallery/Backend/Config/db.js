const mongoose=require('mongoose');

const db=mongoose.connect("mongodb://localhost:27017/image-gallery")

.then(()=>{
   console.log("Mongodb connected....")
})
.catch((err)=>{
  console.log(err)
})

