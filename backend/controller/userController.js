import { User } from "../Models/UserSchema";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(401).json({
        message: "All field are required",
        success: false,
      });
    }
    const user = await User.findOne(email);
    if (user) {
      return res.status(401).json({
        message: "User  already exist",
        success: false,
      });
    }
    const hashpass = await bcryptjs.hash(password, 16);
    await User.create({
      name,
      email,
      password: hashpass,
    });
    return res.status(201).json({
      message: "User Created successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
