const UserService = require('../services/user.service');

class UserController {
  userService = new UserService();
  createUser = async (req, res) => {
    const { email, name, password, confirm, content } = req.body;

    try {
      const createUserResult = await this.userService.createUser(
        email,
        name,
        password,
        confirm,
        content,
      );

      return res.status(201).json({ success: true, data: createUserResult });
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: error });
    }
  };

  getUser = async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      console.log(userId);
      const getUserResult = await this.userService.getUser(userId);
      res.status(200).json({ success: true, data: getUserResult });
    } catch (err) {
      console.error('UserController_getUser', err);
      res.status(401).json({ message: err });
    }
  };

  modifyUser = async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const { content, email } = req.body;

      const modifyUserResult = await this.userService.modifyUser(
        userId,
        email,
        content,
      );
      res.status(200).json({ success: true, modifyUserResult });
    } catch (err) {
      console.error('UserController_modifyUser', err);
      res.status(401).json({ message: err });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
    } catch (err) {
      console.error('UserController_deleteUser', err);
      res.status(401).json({ error: err });
    }
  };
}

module.exports = UserController;
