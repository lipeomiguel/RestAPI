const express = require('express');
const router = express.Router();
router.get("/KeyCheck",(req, res, next) =>{
    res.send("Esse aqui é GET do Key browser");
});
router.post("/KeyPost",(req, res, next) =>{
    res.send("Esse aqui é POST do Key browser");
});
module.exports = router;