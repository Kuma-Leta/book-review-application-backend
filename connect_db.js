const mongoose = require("mongoose");

const connect_db = async () => {
  const db_uri = process.env.MONGO_URI;
  try {
    await mongoose.connect(db_uri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.error("error connecting db:", error);
  }
};

module.exports = { connect_db };
