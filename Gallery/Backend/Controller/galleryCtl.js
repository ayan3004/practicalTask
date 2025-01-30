const GalleryModel=require('../Models/gallerySchema');


module.exports.addimage=async(req,res)=>{
   

  if(!req.file){
    res.status(404).json({msg : "data not uploaded try again...!!!"})
  }
  else {
    let image=req.file.path.replace(/\\/g,"/");
    req.body.image=image;
    console.log(req.body);

    const data=await GalleryModel.create(req.body);

       data ? res.status(200).json({msg : "data add ...!!"}) : 
        res.status(400).json({msg : "data not send try again...!!!"});

  }

}

module.exports.viewGallery=async(req,res)=>{
  const data=await GalleryModel.find({});

  data ? res.status(200).json(data) : 
    res.status(400).json({msg : "data not send try again...!!!"});

}

module.exports.deleteimages=async(req,res)=>{
  const deleteimages=await GalleryModel.findByIdAndDelete(req.query.id)

  deleteimages ? res.status(200).json({msg : "image deleted.."}) : 
                  res.status(400).json({msg : "image not delete try again..."});

}