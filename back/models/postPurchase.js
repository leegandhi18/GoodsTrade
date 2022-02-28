const Sequelize = require('sequelize');

module.exports = class PostPurchase extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userId: {
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(400),
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      comment: {
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
    db.PostPurchase.belongsTo(db.User, { targetKey: 'id', foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'User' } });
    db.PostPurchase.belongsTo(db.Category, { targetKey: 'id', foreignKey: { name: 'categoryId', onDelete: 'SET NULL', as: 'Category' } });
  }

};