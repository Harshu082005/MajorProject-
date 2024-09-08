
const express=require("express");
const router=express.Router({mergeParams: true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {isLoggedIn,isReviewAuthor,validateReview}=require("../middleware.js")

const Listing= require('../models/listing.js');
const Review=require("../models/review.js");

const reviewController=require("../controllers/review.js");
//reviews
//post reviews route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
    
    //reviews delete route
    router.delete("/:reviewId",isLoggedIn,isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

    module.exports=router;