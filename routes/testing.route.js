var express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth")
const dotenv = require('dotenv');
dotenv.config();
const testingcontroller = require('../controllers/testing.controller');

router.post('/create',(req, res, next) => {
    testingcontroller.create(req, res, next);
});
router.get('/getall',(req, res, next) => {
    testingcontroller.getall(req, res, next);
});
router.get('/getById/:id',(req, res, next) => {
    testingcontroller.getById(req, res, next);
});
router.put('/updateById/:id',(req, res, next) => {
    testingcontroller.updateById(req, res, next);
});
router.delete('/deleteById/:id',(req, res, next) => {
    testingcontroller.deleteById(req, res, next); 
    
});


module.exports = router;