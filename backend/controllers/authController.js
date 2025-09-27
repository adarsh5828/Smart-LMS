import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    // get user details from req body
    const { name, email, password } = req.body;

    // check user already  exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with the same email already exsits!" });
    }

    // create hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    // save user in db
    await user.save();

    // create and return token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5d" },
      (err, token) => {
        if (err) {
          console.error(err);
          throw new err();
        }
        return res.status(201).json({ token });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};

export const loginUser = async (req, res) => {
  try {
    // get user details from req body
    const { email, password } = req.body;

    // check user already  exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "email does Not exists!" });
    }

    //    match password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // create and return token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5d" },
      (err, token) => {
        if (err) {
          console.error(err);
          throw new err();
        }
        return res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
};
