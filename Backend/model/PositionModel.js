const {model} = require("mongoose")

const {PositionsSchema} =require('../Schemas/PositionsSchema')

const PositionModel = new model('position',PositionsSchema)

module.exports = {PositionModel}