module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        name:{
            type: dataTypes.STRING,
             },
        description:{
            type: dataTypes.TEXT,
             },
        price:{
            type: dataTypes.INTEGER,
             },                                         
        colors_id:{
            type: dataTypes.INTEGER,
        },
        image:{
            type: dataTypes.INTEGER,
             }
    };
    const config= {
        tableName:"products",
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Color,{
            as: "color",
            foreignKey: "colors_id"
        });
    }
    return Product;
}
