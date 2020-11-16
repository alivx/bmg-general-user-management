const Usermode = require("../models/user.js");
exports.create = (req, res) => {
    console.log(`create user requested data is ${JSON.stringify(req.body)}`);
    // Create a Note
    const user = new Usermode({
        username: req.body.username,
        fullName: req.body.fullName,
        birthday: req.body.birthday,
        email: req.body.email,
        password: req.body.password,
        profilePhoto: req.body.profilePhoto,
    });

    user
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note.",
            });
        });
};

exports.delete = (req, res) => {
    console.log(`Trying to Delete ${req.body.userId}`);
    if (!req.body.userId) {
        return res.status(400).send({
            message: "userId is required",
        });
    }
    Usermode.findByIdAndRemove(req.body.userId)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "user not found",
                });
            }
            console.log("delete user successfull");
            res.status(200).send({ message: "User deleted successfully!" });
        })
        .catch(() => {
            return res.status(500).send({
                message: `Could not delete user with id ${req.body.userId}`,
            });
        });
};