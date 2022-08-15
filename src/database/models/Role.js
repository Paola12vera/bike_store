module.exports = (sequelize, dataTypes) => {
    const alias = 'Role';
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
        tableName:"roles",
        timestamps: false
    };
    const Role = sequelize.define(alias, cols, config);

    return Role;
}