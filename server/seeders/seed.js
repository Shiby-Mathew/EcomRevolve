const db = require("../config/connection");
const { User, Marketplace } = require("../models");
const userSeeds = require("./userSeeds.json");
const marketplaceSeeds = require("./marketplaceSeeds.json");


db.on("error", (err) => err);
db.once("open", async () => {
  try {
    await Marketplace.deleteMany({});
    await User.deleteMany({});
 

    await User.create(userSeeds);
    await Marketplace.create(marketplaceSeeds);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
