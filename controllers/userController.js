const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
                    
                    )
                    .catch((err) => res.status(500).json(err));

    },
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No such user exists' })
              : User.updateMany(
                  { user: req.params.userId },
                  { $pull: { friends: req.params.userId } },
                )
          )
          .then((thought) =>
            !thought
              ? res.status(404).json({
                  message: 'User deleted, but no thoughts or friends found',
                })
              : res.json({ message: 'User successfully deleted' })
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

      addFriend (req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId }, 
            { $addToSet: { friends: req.params.friendId }},
        )
        .then((user) =>
            !user
              ? res
                  .status(404)
                  .json({ message: 'No user found with that ID' })
              : res.json("Added Friend")
          )
          .catch((err) => res.status(500).json(err));

      },
      
      removeFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },

          { $pull: { friends: { friendsId: req.params.friendsId } } },
        )
          .then((user) =>
            !user
              ? res
                  .status(404)
                  .json({ message: 'No user found with that ID :(' })
              : res.json("Removed Friend")
          )
          .catch((err) => res.status(500).json(err));
      },

      updateUser(req, res) {
        let _id = req.params.userId;
        let update = req.body
        User.findByIdAndUpdate(_id, update, { new:true }, function(err, user) {
            if (err) {
                console.error(err);
                res.status(500).json(err)
            } else {
                res.json(user);
            }
        }
        )
      }
};

