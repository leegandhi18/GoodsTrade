const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userId: {
        type: Sequelize.STRING(400),
        unique: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(400),
        allowNull: false
      },
      location: {
        type: Sequelize.STRING(300),
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
    db.User.hasMany(db.PostSale, { sourceKey: 'id', foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'PostSale' } });
    db.User.hasMany(db.PostPurchase, { sourceKey: 'id', foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'PostPurchase' } });
  }

};