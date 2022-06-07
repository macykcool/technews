
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our User model 
class User extends Model {}

//define table columns and configuration

User.init(
    {
        // define an id column
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
             // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
              // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
         email: {
             type: DataTypes.STRING,
             allowNull: false,
             unique: true,
             validate: {
                 isEmail: true
             }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                len: [4]
            }
        }
    },
    {
         // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the databas
    MODELNAME: 'user'
    }
);

module.exports = User;
