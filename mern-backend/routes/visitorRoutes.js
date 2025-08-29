const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');

// POST: Register new visitor
router.post('/', async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    await visitor.save();
    res.status(201).json(visitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: All registered visitors
router.get('/', async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ createdAt: -1 });
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/check-nic/:nic', async (req, res) => {
  try {
    const visitor = await Visitor.findOne({ nic: new RegExp(`^${req.params.nic}$`, 'i') });
    if (visitor) {
      res.status(200).json({ exists: true, visitor });
    } else {
      res.status(404).json({ exists: false });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
