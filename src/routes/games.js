const express = require('express');
const Games =  require('../models/Games');

const router = express.Router();

router.get("/", async (req, res) => {
    const result =await Games.find();

    return res.json({messaga:" GAME OK !!! ", data:result})
})


module.exports = router;