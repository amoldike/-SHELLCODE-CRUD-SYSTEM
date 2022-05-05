const UserModel = require("./../models/users");
const validator = require("./../password_validaor.js");

// ----------------Create New User In DB----------------------------
exports.createUser = async (req, res) => {
  const isValidPass = validator(req.body.password);

  if (isValidPass) {
    try {
      const newUser = new UserModel(req.body);

      res.status(201).json(await newUser.save());
    } catch (err) {
      res.status(500).json({ err: err });
    }
  } else {
    res
      .status(415)
      .send(
        "Password Must Have At Least 1 Digit, 1 Upper & 1 Lower Case Letter & Should Not Have Special Characters"
      );
  }
};

// ----------------------TO GET ALL USER INFORMATION (find)---------------------
exports.getAllUserInfo = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// ------------------------TO GET INFO OF SPECIFIED USERS-----------------------

exports.getUserInfo = async (req, res) => {
  try {
    const user = await UserModel.find({ _id: req.params.userId });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// ------------TO UPDATE THE USER INFORMATION OF SPECIFIED USER-----------
exports.updateUserInfo = async (req, res) => {
  console.log("demo", req.params.userId);

  const isValidPass = validator(req.body.password);

  if (isValidPass) {
    UserModel.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      { new: true },
      (err, data) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.status(200).json(data);
        }
      }
    );
  } else {
    res
      .status(415)
      .send(
        "Password Must Have At Least 1 Digit, 1 Upper & 1 Lower Case Letter & Should Not Have Special Characters"
      );
  }
};

// --------------TO DELETE THE USER INFORMATION OF SPECIFIED USER-------------

exports.deleteUserInfo = (req, res) => {
  UserModel.findOneAndDelete({ _id: req.params.userId }, (err, data) => {
    //   if error
    if (err) {
      res.status(500).json({ error: err });
      //   if no error
    } else {
      res.status(200).json(data);
    }
  });
};
