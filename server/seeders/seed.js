const db = require("../config/connection");
const { User, Brand } = require("../models");
const userSeeds = require("./userSeeds.json");
const brandSeeds = require("./brandSeeds.json");

db.on("error", (err) => err);
db.once("open", async () => {
  try {
    await Brand.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Brand.create(brandSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
