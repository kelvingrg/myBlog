const mongoose = require('mongoose');
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/myBlog`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
    }
  }
  module.exports=connectDB