const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: {
                msg: "Please enter a valid email address"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    sequelize,
    modelName: 'User'
});

module.exports = User;