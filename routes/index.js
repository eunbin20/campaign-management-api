
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async function(req, res, next) {
  const { data } = await axios.get(
    'https://herren-common.s3.ap-northeast-2.amazonaws.com/frontend/campaignInfo.json'
  );

  res.json(data)
});

router.get('/summary', async function(req, res, next) {
  const { data } = await axios.get(
    'https://herren-common.s3.ap-northeast-2.amazonaws.com/frontend/campaignCountInfo.json'
  );

  res.json(data)
});

module.exports = router;
