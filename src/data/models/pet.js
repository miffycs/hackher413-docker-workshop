import mongoose from 'mongoose';


const petSchema = new mongoose.Schema({
  name: String,
  gender: String,
  type: String,
  age: Number,
  breed: String,
  status: String,
  description: String,
  photo: String
});

export default mongoose.model('Pet', petSchema);
