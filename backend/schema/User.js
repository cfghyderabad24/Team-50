import { Schema } from "mongoose";
import Attendence from "../../frontend/src/Components/Attendence";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  attendence: {
    type: array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  marks:{
    type:Object,
    default:{}
  }
});
