const db = require("../config/connection");
const { User, Marketplace,Review } = require("../models");
const userSeeds = require("./userSeeds.json");
const reviewSeeds = require("./reviewSeeds.json");
const marketplaceSeeds = require("./marketplaceSeeds.json");


db.on("error", (err) => err);
db.once("open", async () => {
  try {
    await Marketplace.deleteMany({});
    await User.deleteMany({});
    await Review.deleteMany({});
 

    await User.create(userSeeds);
    await Marketplace.create(marketplaceSeeds);
    await Review.create(reviewSeeds);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
