const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const { string } = require('@hapi/joi');
const Schema = mongoose.Schema;
// const ObjectId = mongoose.ObjectId


const testingSchema = new Schema({
      userName: {
        type: String,
        required: true
      },
      firstName: {
        type: String,
        required: true
      },

      lastName: {
        type: String,
        required: true

      
      },
      password:{
        type:String,
        required: true

      },
      emailAddress:{
        type:String,
        required: true

      },
      contactNumber:{
        type:Number,
        required: true

      }


  
    
})

// testingSchema.methods.generateAuthToken = function (payload) {
    
//     const token = jwt.sign(payload, process.env.ADSECRET_KEY,{
// 		algorithm: "HS512",
// 		expiresIn: 3600,
// 	});
//     return token;
// }

function validate(request) {

    const schema = Joi.object().options({ abortEarly: false }).keys({
      userName: Joi.string().min(1).required().label("userName"),
      firstName:Joi.string().min(1).required().label("firstName"),
      lastName:Joi.string().min(1).required().label("lastName"),
      password:Joi.string().min(1).required().label("password"),
      emailAddress:Joi.string().min(1).required().label("emailAddress"),
      contactNumber:Joi.number().min(10).required().label("contactNumber"),

    });

    return schema.validate(request);
}

exports.Testing = mongoose.model('testing', testingSchema);
exports.validate = validate;