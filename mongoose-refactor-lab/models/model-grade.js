import mongoose from "mongoose";
//scores is an array of objects so need two schemas to access inner objects


const scoreSchema = new mongoose.Schema({
  type: String,
  score: Number
});

//main schema for the grade document
const gradeSchema = new mongoose.Schema({
  learner_id: Number,
  class_id: Number,
  scores: [scoreSchema]
});

const Grade = mongoose.model("Grade", gradeSchema); //registers the schema with mongoose and tells it to go to the grades collection

export default Grade;