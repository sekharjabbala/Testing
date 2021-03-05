const nodemailer = require('nodemailer');
const keys = require('./keys');





var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'verify.wps@gmail.com',
        pass:'Guru$$$999'
    }
});

module.exports = transporter;
