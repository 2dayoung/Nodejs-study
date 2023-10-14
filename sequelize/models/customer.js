const { DataTypes, DATE } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
    const newCustomer = sequelize.define("new_customer", {
        name: {
            type: DataTypes.STRING(20),
            allowNull:false
        },
    
        age: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        sex : {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        joined_data: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false
        },

        },{
            timestamp:false
        });
    
    
    return newCustomer;
};