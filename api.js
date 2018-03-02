const express = require('express');

const {
  create,
  readAll,
  readOne,
  update,
  del,
} = require('./notes');

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

/* todo útfæra api
router.get
*/
router.get('/', async (req, res) => {
  const rows = await readAll();
  res.json(rows);
});

module.exports = router;