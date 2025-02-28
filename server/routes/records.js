const express = require('express');
const router = express.Router();
// const connection = require("../app/models/Record");
 
router.get('/', async (req, res) => {
   // connection.query(`SELECT * FROM donates`, (err, result) => {
   //    res.send(result)
   //  })
   res.send(3245352)
});
 
router.post('/', async (req, res) => {
   const record = new Record(req.body);
   await record.save();
   res.json({state: 'success'});
});

router.get('/:id', async (req, res) => {
   res.json(await Record.findById(req.params.id));
});
 
router.put('/:id', async (req, res) => {
   await Record.findByIdAndUpdate(req.params.id, req.body);
   res.json({state: 'updated'});
});

router.delete('/:id', async (req, res) => {
   await Record.findByIdAndRemove(req.params.id);
   res.json({state: 'deleted'});
});
 
module.exports = router;