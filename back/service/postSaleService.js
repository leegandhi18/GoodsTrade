const logger = require('../lib/logger');
const postSaleDao = require('../dao/postSaleDao');

const service = {
  // 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await postSaleDao.insert(params);
      logger.debug(`(postSaleService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(postSaleService.reg) ${err.toString()}`);
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
      result = await postSaleDao.selectList(params);
      logger.debug(`(postSaleService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postSaleService.list) ${err.toString()}`);
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
      result = await postSaleDao.selectInfo(params);
      logger.debug(`(postSaleService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postSaleService.info) ${err.toString()}`);
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
      result = await postSaleDao.update(params);
      logger.debug(`(postSaleService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postSaleService.edit) ${err.toString()}`);
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
      result = await postSaleDao.delete(params);
      logger.debug(`(postSaleService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(postSaleService.delete) ${err.toString()}`);
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