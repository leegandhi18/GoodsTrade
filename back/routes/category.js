const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const categoryService = require('../service/categoryService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      categoryId: req.body.categoryId,
      categoryName: req.body.categoryName
    };
    logger.info(`(category.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.categoryId) {
      const err = new Error('Not allowed null (categoryId)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await categoryService.reg(params);
    logger.info(`(category.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      name: req.query.name,
    };
    logger.info(`(category.list.params) ${JSON.stringify(params)}`);

    const result = await categoryService.list(params);
    logger.info(`(category.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(category.info.params) ${JSON.stringify(params)}`);

    const result = await categoryService.info(params);
    logger.info(`(category.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    // 회원정보 수정 시 userid 값은 변경할 수 없게 params에서 제외시킴
    const params = {
      id: req.params.id,
      categoryId: req.body.categoryId,
      categoryName: req.body.categoryName
    };
    logger.info(`(category.update.params) ${JSON.stringify(params)}`);

    const result = await categoryService.edit(params);
    logger.info(`(category.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(category.delete.params) ${JSON.stringify(params)}`);

    const result = await categoryService.delete(params);
    logger.info(`(category.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;