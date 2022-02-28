const logger = require('../lib/logger');
const postPurchaseDao = require('../dao/postPurchaseDao');

const service = {
  // 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await postPurchaseDao.insert(params);
      logger.debug(`(postPurchaseService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(postPurchaseService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },

  // selectList
  async list(params) {
    let result = null;

    try {
      result = await postPurchaseDao.selectList(params);
      logger.debug(`(postPurchaseService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postPurchaseService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },

  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await postPurchaseDao.selectInfo(params);
      logger.debug(`(postPurchaseService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postPurchaseService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },

  async edit(params) {
    let result = null;

    try {
      result = await postPurchaseDao.update(params);
      logger.debug(`(postPurchaseService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postPurchaseService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },

  // delete
  async delete(params) {
    let result = null;

    try {
      result = await postPurchaseDao.delete(params);
      logger.debug(`(postPurchaseService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postPurchaseService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },

};

module.exports = service;