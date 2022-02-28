const Sequelize = require('sequelize');

module.exports = class Category extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      categoryId: {
        type: Sequelize.STRING(400),
        unique: true,
        allowNull: false
      },
      categoryName: {
        type: Sequelize.STRING(500),
        allowNull: false
      }
    }, {
      sequelize,
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: false, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }

  static associate(db) {
    db.Category.hasMany(db.PostSale, { sourceKey: 'id', foreignKey: { name: 'categoryId', onDelete: 'SET NULL', as: 'PostSale' } });
    db.Category.hasMany(db.PostPurchase, { sourceKey: 'id', foreignKey: { name: 'categoryId', onDelete: 'SET NULL', as: 'PostPurchase' } });
  }

};