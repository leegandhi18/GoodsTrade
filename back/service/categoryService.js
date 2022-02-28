const logger = require('../lib/logger');
const categoryDao = require('../dao/categoryDao');

const service = {
  // 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await categoryDao.insert(params);
      logger.debug(`(categoryService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(categoryService.reg) ${err.toString()}`);
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
      result = await categoryDao.selectList(params);
      logger.debug(`(categoryService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(categoryService.list) ${err.toString()}`);
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
      result = await categoryDao.selectInfo(params);
      logger.debug(`(categoryService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(categoryService.info) ${err.toString()}`);
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
      result = await categoryDao.update(params);
      logger.debug(`(categoryService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(categoryService.edit) ${err.toString()}`);
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
      result = await categoryDao.delete(params);
      logger.debug(`(categoryService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(categoryService.delete) ${err.toString()}`);
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