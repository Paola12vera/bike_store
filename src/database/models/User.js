module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        name:{
            type: dataTypes.STRING,
             },
    };
    const config= {
        tableName:"users",
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
    User.associate = function(models){
        User.belongsTo(models.Role,{
            as: "role",
            foreignKey: "roles_id"
        });
    }
    return User;
}