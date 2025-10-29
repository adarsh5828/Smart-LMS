import mongoose from "mongoose";

// module schema
const moduleSchema = new Schema({
  title: {type: String, required: true},
  lessons: [lessonSchema],
})
// lesson schema
const lessonSchema = new Schema({
  title: {type: String, required: true},
  videoUrl: {type: String, required: true},
})

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  modules: [moduleSchema],
},{timestamps:true});
const Course = mongoose.model("Course", courseSchema);
export default Course;
