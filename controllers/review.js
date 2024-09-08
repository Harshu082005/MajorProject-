const Review=require("../models/review.js")
const Listing=require("../models/listing.js")
module.exports.createReview=async(req,res)=>{
   
    let aListing=await Listing.findById(req.params.id);
    
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    aListing.reviews.push(newReview);
    await newReview.save();
    await aListing.save();
    req.flash("success","new review created");
    res.redirect(`/listings/${aListing._id}`);
    
    }
    module.exports.destroyReview=async(req,res)=>{
        let {id,reviewId}=req.params;
        console.log(`Deleting review with ID: ${reviewId} from listing: ${id}`);
        await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("success","review deleted");
        res.redirect(`/listings/${id}`);
    
    }