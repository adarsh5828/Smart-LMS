import Course from "../models/courseModel.js";

export const getCourse = async (req, res) => {
  const { keyword, category } = req.query;
  console.log("keyword, category", keyword, category);

  // title filter
  const titleFilter = keyword
    ? { title: { $regex: keyword, $options: "i" } }
    : {};
  console.log("titleFilter", titleFilter);

  try {
    const courses = await Course.find({ ...titleFilter })
      .populate("category", "name")
      .populate("instructor", "name");
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ message: "Server error!" });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("category", "name")
      .populate("instructor", "name");

    if (!course) {
      return res.status(404).json({ message: "COurse not found" });
    }

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: "Server error!" });
  }
};
