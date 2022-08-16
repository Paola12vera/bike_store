module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        firstName:{
            type: dataTypes.STRING
             },
        lastName:{
            type: dataTypes.STRING
            },
        email:{
            type: dataTypes.STRING
            },
        password:{
            type: dataTypes.STRING
            },            
        roles_id:{
            type: dataTypes.INTEGER,
            } 
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