import userModel from "../models/user.model";

class UserManager {
  async addUser(user: Object) {
    try {
      console.log(user);
      
      const newUser = await userModel.create(user);
      return newUser;
    } catch (err) {
      console.log(err);
    }
  }
}

export default UserManager;
