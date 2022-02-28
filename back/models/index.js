const { sequelize } = require('./connection');
const User = require('./user');
const PostSale = require('./postSale');
const PostPurchase = require('./postPurchase');
const Category = require('./category');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.PostSale = PostSale;
db.PostPurchase = PostPurchase;
db.Category = Category;

// model init
User.init(sequelize);
PostSale.init(sequelize);
PostPurchase.init(sequelize);
Category.init(sequelize);

// association(관계 생성)
User.associate(db);
PostSale.associate(db);
PostPurchase.associate(db);
Category.associate(db);

module.exports = db;