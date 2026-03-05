const {model} =require ('mongoose')

const {OrdersSchema, OrderSchema} = require ('../Schemas/OrdersSchema')

const OrderModel = new model('order',OrderSchema)

module.exports = {OrderModel}

