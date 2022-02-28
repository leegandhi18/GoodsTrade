const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const postPurchaseService = require('../service/postPurchaseService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      userId: req.body.userId,
      categoryId: req.body.categoryId,
      title: req.body.title,
      description: req.body.description,
      comment: req.body.comment
    };
    logger.info(`(postPurchase.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.title) {
      const err = new Error('Not allowed null (title)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await postPurchaseService.reg(params);
    logger.info(`(postPurchase.reg.result) ${JSON.stringify(result)}`);

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
    logger.info(`(postPurchase.list.params) ${JSON.stringify(params)}`);

    const result = await postPurchaseService.list(params);
    logger.info(`(postPurchase.list.result) ${JSON.stringify(result)}`);

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
    logger.info(`(postPurchase.info.params) ${JSON.stringify(params)}`);

    const result = await postPurchaseService.info(params);
    logger.info(`(postPurchase.info.result) ${JSON.stringify(result)}`);

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
      userId: req.body.userId,
      categoryId: req.body.categoryId,
      title: req.body.title,
      description: req.body.description,
      comment: req.body.comment
    };
    logger.info(`(postPurchase.update.params) ${JSON.stringify(params)}`);

    const result = await postPurchaseService.edit(params);
    logger.info(`(postPurchase.update.result) ${JSON.stringify(result)}`);

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
    logger.info(`(postPurchase.delete.params) ${JSON.stringify(params)}`);

    const result = await postPurchaseService.delete(params);
    logger.info(`(postPurchase.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;