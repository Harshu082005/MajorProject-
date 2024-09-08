const Listing=require("../models/listing.js")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

const mapToken=process.env.Map_TOKEN

const geocodingClient = mbxGeocoding({ accessToken: mapToken});
module.exports.index=async(req,res,next)=>{
    
    const allListings= await Listing.find({});
    res.render("listings/index",{allListings});
    
    };
   module.exports.renderNewform=(req,res)=>{
        res.render("listings/new.ejs");
        
        };
    module.exports.showListing=async(req,res)=>{
        const {id} = req.params; 
        const aListings= await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
        if(!aListings){
            req.flash("error","the listing you want does not exits!");
           return  res.redirect("/listings");
        }
    res.render("listings/show",{aListings})
}
module.exports.createListing=async(req,res,next)=>{
   let response= await geocodingClient.forwardGeocode({
 query:req.body.aListings.location,
 limit:1
    })
    .send();
    let url= req.file.path;
    let filename=req.file.filename;

    const newlist=new Listing(req.body.aListings);
    console.log(req.user);
    newlist.owner=req.user._id;
newlist.image={url,filename};
newlist.geometry=response.body.features[0].geometry;
    let savedListing=await newlist.save();
    console.log(savedListing);
    req.flash("success","new Listing created");
    res.redirect("/listings");
    }
    module.exports.renderEditForm=async(req,res)=>{
    
        const {id} = req.params; 
        const aListings= await Listing.findById(id);
        if(!aListings){
            req.flash("error"," listing you request for does not exits!");
            res.redirect("/listings");
        }
    let originalimageUrl=aListings.image.url;
    originalimageUrl=originalimageUrl.replace("/upload","/upload/w_250");
        res.render("listings/edit",{aListings,originalimageUrl});
    
    };
    module.exports.updateListing=async(req,res,next)=>{
       
        const {id} = req.params; 
        const newListings= await Listing.findByIdAndUpdate(id,{...req.body.aListings});
        if(typeof req.file !="undefined"){
        let url= req.file.path;
        let filename=req.file.filename;
        newListings.image={url,filename};
        await newListings.save();
        }
        req.flash("success"," Listing updated");
         res.redirect(`/listings/${id}`);
       
    }
    module.exports.destroyListing=async(req,res)=>{
        const {id} = req.params; 
        const listing= await Listing.findByIdAndDelete(id);
        req.flash("success"," Listing deleted");
       res.redirect("/listings")
    
    
    };
    