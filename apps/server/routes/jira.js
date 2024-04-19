const express = require('express');
const router = express.Router();

router.get('/epics/search', async function (req, res) {
  const list = require('../mockData/jira-list.js');
  return res.json(list);
});

module.exports = router;
