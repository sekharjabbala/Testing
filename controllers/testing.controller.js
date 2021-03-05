const { assert } = require('@hapi/joi');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
var objectId = require('mongodb').ObjectID;
var mongo = require('mongodb').MongoClient;


// Post model
const {
    Testing,
    validate
} = require('../models/testing');

exports.create = async (req, res) => {
    try {
        //  const { errors, isValid } = validateProfileInput(req.body);
        const {
            error
        } = validate(req.body);
        const errors = {};
        if (error) {
            for (let err of error.details) {
                errors[err.path[0]] = (err.message).replace(/"/g, "");
            }
        }
        if (error) return res.status(422).json({
            "statusCode": "422",
            "msg": "",
            "success": false,
            "response": {},
            errors
        });

        const testing = new Testing({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            emailAddress: req.body.emailAddress,
            contactNumber: req.body.contactNumber

        })

        testing.save()
            .then(testing => res.json({
                "status": "200",
                "success": true,
                "msg": "testing is sucessfully created",
                "response": testing
            }))

    } catch (err) {
        return res.status(422).json({
            "statusCode": "422",
            "msg": "",
            "success": false,
            "user": {},
            "error": err.message
        });
    }
}

exports.getall = async (req, res) => {
    const errors = {};

    Testing.find()
   
        .then(Testing => {
           
            if (!Testing) {
                errors.notesting = 'There are no Testing';
                return res.status(404).json({
                    "statuscode": "404",
                    "msg": "",
                    "success": true,
                    errors
                });
            }

            return res.status(200).json({
                statuscode: "200",
                "success": true,
                "msg": "Testing fetched sucessfully",
                response: Testing
            });
        })
        .catch(err => res.status(404).json({
            "statuscode": "200",
            "success": false,
            "msg" : 'There are no Testing',
            "error": err.message
        }));
}

exports.getById = async (req, res) => {
    const errors = {};

    try {
        const id = req.params.id;
        if (id) {
            Testing.findById({"_id": objectId(id)})
            .then((result) => {
              console.log("result getById Find :", result);
              return res.status(200).json({
                location: result,
                status: "200",
                message: "Data Fetched Successfully",
                success: true
              });
            })
            .catch(err => {
              console.log("Error getById API Fetch", err);
              handleError(err, 400, res);
            });
        }
        else {
          err = { message: 'Invalid Input' }
          handleError(err, 400, res);
        }
    
      } catch (error) {
        console.log("Error getById:", error);
        handleError(error, 400, res);
      }
        
}

exports.updateById = async (req, res) => {
    // await mongoose.mongo().then(async (mongoose) => {

    var item = {
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            emailAddress: req.body.emailAddress,
            contactNumber: req.body.contactNumber,
    }

        
    try {
        const id = req.params.id
        const result = await Testing.updateOne({"_id": objectId(id)},{$set: item});
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }

}

exports.deleteById = async (req, res) => {

try {
    const id = req.params.id
    const result = await Testing.findByIdAndRemove({"_id": objectId(id)});
    res.send(result);
    console.log('testing deleted successfully');
} catch (error) {
    console.log(error.message);
}


}

