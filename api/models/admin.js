const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = mongoose.Schema({
    name: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    image: {
      type: String
    }
});

const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getAdminById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getAdminByUsername = function(username, callback) {
  let query = { username: username };
  Admin.findOne(query, callback);
}

module.exports.getAdminByEmail = function(email, callback) {
  let query = { email: email };
  Admin.findOne(query, callback);
}

module.exports.addAdmin = function(newAdmin, callback) {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newAdmin.password, salt, (err, hash) => {
        if (err) throw err;
          newAdmin.password = hash;
          newAdmin.save(callback);
      });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
      callback(null, isMatch);
  });
}
