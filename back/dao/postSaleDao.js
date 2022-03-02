const { PostSale, Category, User } = require('../models/index');

const dao = {
  // 사용자 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      PostSale.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 사용자 리스트 조회
  selectList(params) {
    // // where 검색 조건
    // const setQuery = {};
    // if (params.name) {
    //   setQuery.where = {
    //     ...setQuery.where,
    //     name: { [Op.like]: `%${params.name}%` }, // like검색
    //   };
    // }

    // // order by 정렬 조건
    // setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      PostSale.findAndCountAll({
        // ...setQuery,
        include: [
          {
            model: User,
            as: 'User',
            attributes: ['userId', 'name'],
          },
          {
            model: Category,
            as: 'Category',
            attributes: ['categoryId', 'categoryName']
          }
        ],
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 상세정보 조회
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      PostSale.findByPk(
        params.id,
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      PostSale.update(
        params,
        {
          where: { id: params.id },
        },
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 삭제
  delete(params) {
    return new Promise((resolve, reject) => {
      PostSale.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;