const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const listingController=require("../controllers/listing.js");
const Listing = require('../models/listing.js');
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js")
const multer=require('multer');
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});



//Index Route
router
.route("/")
.get(wrapAsync(listingController.index))
 .post(isLoggedIn,upload.single('aListings[image]'),validateListing,wrapAsync(listingController.createListing)
   );

//new route
router.get("/new",isLoggedIn,listingController.renderNewform);
 router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn,isOwner,upload.single('aListings[image]'),validateListing,wrapAsync(listingController.updateListing))

      .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));
    module.exports=router;

//edit route
 router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

    
