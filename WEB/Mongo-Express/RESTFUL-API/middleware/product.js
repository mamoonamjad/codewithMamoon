const {validating} = require('../models/productModel')
const {router} = require("../app")

function validationProduct(req,res,next)
{
    let {error} = validating(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next()
}

module.exports =validationProduct;